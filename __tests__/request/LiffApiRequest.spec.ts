import { LiffAppCreateRequest, LiffAppUpdateRequest, LiffAppGetRequest, LiffAppDeleteRequest } from '../../src/request/LiffApiRequest';
import { LiffApp } from '../../src/entity/LiffApp';

describe('When LiffAppCreateRequest is instanciated,', () => {

    const channelAccessToken = 'dummy_access_token';
    const liffApp: LiffApp = {
        liffId: 'dummy_liff_id',
        view: {
            type: 'tall',
            url: 'https://liff.dummy.com/'
        },
    };

    let request: LiffAppCreateRequest;

    beforeAll(() => {
        request = new LiffAppCreateRequest({
            channelAccessToken: channelAccessToken,
            liffApp: liffApp
        });
    });

    test('The value of method is POST.', () => {
        expect(request.method).toBe('POST');
    });

    test(`The value of header is {"Authorization": "Bearer ${channelAccessToken}", "Content-Type": "application/json"}.`, () => {
        expect(request.headers).toEqual({
            'Authorization': `Bearer ${channelAccessToken}`,
            'Content-Type': 'application/json',
        });
    });

    test(`The value of endpoint is /liff/v1/apps.`, () => {
        expect(request.endpoint).toBe(`/liff/v1/apps`);
    });
});

describe('When LiffAppUpdateRequest is instanciated,', () => {

    const channelAccessToken = 'dummy_access_token';
    const liffApp: LiffApp = {
        liffId: 'dummy_liff_id',
        view: {
            type: 'tall',
            url: 'https://liff.dummy.com/'
        },
    };

    let request: LiffAppUpdateRequest;

    beforeAll(() => {
        request = new LiffAppUpdateRequest({
            channelAccessToken: channelAccessToken,
            liffApp: liffApp
        });
    });

    test('The value of method is PUT.', () => {
        expect(request.method).toBe('PUT');
    });

    test(`The value of header is {"Authorization": "Bearer ${channelAccessToken}", "Content-Type": "application/json"}.`, () => {
        expect(request.headers).toEqual({
            'Authorization': `Bearer ${channelAccessToken}`,
            'Content-Type': 'application/json',
        });
    });

    test(`The value of endpoint is /liff/v1/apps/${liffApp.liffId}.`, () => {
        expect(request.endpoint).toBe(`/liff/v1/apps/${liffApp.liffId}`);
    });
});

describe('When LiffAppGetRequest is instanciated,', () => {

    const channelAccessToken = 'dummy_access_token';

    let request: LiffAppGetRequest;

    beforeAll(() => {
        request = new LiffAppGetRequest({
            channelAccessToken: channelAccessToken,
        });
    });

    test('The value of method is GET.', () => {
        expect(request.method).toBe('GET');
    });

    test(`The value of header is {"Authorization": "Bearer ${channelAccessToken}"}.`, () => {
        expect(request.headers).toEqual({
            'Authorization': `Bearer ${channelAccessToken}`,
        });
    });

    test(`The value of endpoint is /liff/v1/apps.`, () => {
        expect(request.endpoint).toBe(`/liff/v1/apps`);
    });
});

describe('When LiffAppDeleteRequest is instanciated,', () => {

    const channelAccessToken = 'dummy_access_token';
    const liffId = 'dummy_liff_id';

    let request: LiffAppDeleteRequest;

    beforeAll(() => {
        request = new LiffAppDeleteRequest({
            channelAccessToken: channelAccessToken,
            liffId: liffId,
        });
    });

    test('The value of method is DELETE.', () => {
        expect(request.method).toBe('DELETE');
    });

    test(`The value of header is {"Authorization": "Bearer ${channelAccessToken}"}.`, () => {
        expect(request.headers).toEqual({
            'Authorization': `Bearer ${channelAccessToken}`,
        });
    });

    test(`The value of endpoint is /liff/v1/apps/${liffId}.`, () => {
        expect(request.endpoint).toBe(`/liff/v1/apps/${liffId}`);
    });
});