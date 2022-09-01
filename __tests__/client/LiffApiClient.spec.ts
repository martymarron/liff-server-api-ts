import { LiffApiClient, NoSuchLiffAppError } from '../../src/client/LiffApiClient';
import { LiffAppDeleteRequest, LiffAppGetRequest } from '../../src/request/LiffApiRequest';
import { LiffApiGetResponse } from '../../src/response/LiffApiGetResponse';
import fetchMock from 'jest-fetch-mock';
import { LiffApp } from '../../src/entity/LiffApp';

const baseUrl = 'https://api.line-beta.me';

describe('the request to `/liff/v1/apps/{liffId}` with GET method gets no LIFF apps with the HTTP status code 404,', () => {

    beforeAll(() => {
        fetchMock.doMock(
            () => Promise.resolve({ status: 404, body: "Not Found" })
        );
    });
    describe('WHEN invoking the `LIFFApiClient#getAll()`,', () => {

        let response: LiffApiGetResponse;
        beforeAll(async () => {
            const request: LiffAppGetRequest = new LiffAppGetRequest({
                channelAccessToken: 'dummy_token'
            });
            const client: LiffApiClient = new LiffApiClient(baseUrl);
            response = await client.getAll(request);
        });
        test('THEN the LiffApiGetResponse contains the member `apps` that value is an empty array.', () => {
            expect(response).toEqual({ apps: [] });
        });
    });
});

describe('GIVEN the request to `/liff/v1/apps/{liffId}` with GET method gets some LIFF apps with the HTTP status code 200,', () => {

    let body: {
        apps: LiffApp[]
    };
    beforeAll(() => {
        body = {
            apps: [
                {
                    liffId: 'dummy_liff_id',
                    view: {
                        type: 'full',
                        url: 'https://example.com/',
                        moduleMode: false,
                    },
                    description: 'dummy_description',
                    features: {
                        ble: false,
                    },
                    permanentLinkPattern: 'concat',
                }
            ]
        };

        fetchMock.doMock(
            () => Promise.resolve({ status: 200, body: JSON.stringify(body) })
        );
    });
    describe('WHEN invoking the `LIFFApiClient#getAll()`,', () => {

        let response: LiffApiGetResponse;
        beforeAll(async () => {
            const request: LiffAppGetRequest = new LiffAppGetRequest({
                channelAccessToken: 'dummy_token'
            });
            const client: LiffApiClient = new LiffApiClient(baseUrl);
            response = await client.getAll(request);
        });
        test('THEN the LiffApiGetResponse contains the member `apps` that value is an array of the LIFF app.', () => {
            expect(response).toEqual(body);
        });
    });
});

describe('GIVEN the request `/liff/v2/apps/{liffId}` with DELETE request results succeeded with the HTTP status 200', () => {
    beforeAll(() => {
        fetchMock.doMock(() => Promise.resolve({ status: 200 }));
    });
    describe('WHEN invoking the `LIFFApiClient#delete()`,', () => {
        
        let request: LiffAppDeleteRequest;
        let client: LiffApiClient;
        beforeAll(() => {
            request = new LiffAppDeleteRequest({
                channelAccessToken: 'dummy_token',
                liffId: 'dummy_liff_id',
            });
            client = new LiffApiClient(baseUrl);
        });
        test('THEN Promise.resove(void) is returned.', async () => {
            await expect(client.delete(request)).resolves.toBeUndefined();
        });
    });
});

describe('GIVEN the request `/liff/v2/apps/{liffId}` with DELETE request results failed with the HTTP status 404', () => {
    beforeAll(() => {
        fetchMock.doMock(() => Promise.resolve({ status: 404, body: 'No Data' }));
    });
    describe('WHEN invoking the `LIFFApiClient#delete()`,', () => {
        
        let request: LiffAppDeleteRequest;
        let client: LiffApiClient;
        beforeAll(() => {
            request = new LiffAppDeleteRequest({
                channelAccessToken: 'dummy_token',
                liffId: 'dummy_liff_id',
            });
            client = new LiffApiClient(baseUrl);
        });
        test('THEN `NoSuchLiffAppError` is thrown.', async () => {
            expect.assertions(1);
            await expect(client.delete(request)).rejects.toEqual(new NoSuchLiffAppError());
        });
    });
});