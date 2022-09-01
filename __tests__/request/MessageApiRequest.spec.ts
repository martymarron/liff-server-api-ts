import { IssueAccessTokenRequest } from '../../src/request/MessageApiRequest';

describe('When IssueAccessTokenRequest is instanciated,', () => {

    const channelId = 'dummy_id';
    const channelSecret = 'dummy_secret';

    let request: IssueAccessTokenRequest;

    beforeAll(() => {
        request = new IssueAccessTokenRequest({
            channelId: channelId,
            channelSecret: channelSecret
        });
    });
    test('The value of method is POST.', () => {
        expect(request.method).toBe('POST');
    });

    test('The value of endpoint is /v2/oauth/accessToken.', () => {
        expect(request.endpoint).toBe('/v2/oauth/accessToken');
    });

    test('The value of content type in headers is application/x-www-form-urlencoded.', () => {
        expect(request.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
    });

    test(`The value of client_id in body is ${channelId}.`, () => {
        expect(request.body.get('client_id')).toBe(channelId);
    });

    test(`The value of client_secret in body is ${channelSecret}.`, () => {
        expect(request.body.get('client_secret')).toBe(channelSecret);
    });

    test(`The value of grant_type in body is client_credentials`, () => {
        expect(request.body.get('grant_type')).toBe('client_credentials');
    });
});

