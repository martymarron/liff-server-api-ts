type MessageApiRequestBase = {
    endpoint: string,
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    headers: Record<string, string>,     
    body: URLSearchParams,
}

export class IssueAccessTokenRequest implements MessageApiRequestBase {
    readonly endpoint = '/v2/oauth/accessToken';
    readonly method = 'POST';
    readonly headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    readonly body = new URLSearchParams();

    constructor(args: {
        channelId: string,
        channelSecret: string,
    }) {
        this.body.append('client_id', args.channelId);
        this.body.append('client_secret', args.channelSecret);
        this.body.append('grant_type', 'client_credentials');
    }
}