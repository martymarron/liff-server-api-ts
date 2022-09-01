import { LiffApp } from "../entity/LiffApp";

type LiffApiRequestBase = {
    endpoint: string,
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    headers: {
        "Authorization": string,
        "Content-Type"?: string,
    }
    liffApp?: LiffApp,
}

export class LiffAppCreateRequest implements LiffApiRequestBase {
    readonly endpoint = '/liff/v1/apps';
    readonly method = 'POST';
    readonly liffApp: LiffApp;
    readonly headers;

    constructor (args: {
        channelAccessToken: string,
        liffApp: LiffApp,
    }) {
        this.liffApp = args.liffApp;
        this.headers = {
            'Authorization': `Bearer ${args.channelAccessToken}`,
            'Content-Type': 'application/json'
        };
    }
}

export class LiffAppUpdateRequest implements LiffApiRequestBase {
    readonly endpoint: string;
    readonly method = 'PUT';
    readonly liffApp: LiffApp;
    readonly headers;

    constructor(args: {channelAccessToken: string, liffApp: LiffApp}) {
        this.endpoint = `/liff/v1/apps/${args.liffApp.liffId}`;
        this.liffApp = args.liffApp;
        this.headers = {
            'Authorization': `Bearer ${args.channelAccessToken}`,
            'Content-Type': 'application/json'
        };
    }
}

export class LiffAppGetRequest implements LiffApiRequestBase {
    readonly endpoint = '/liff/v1/apps';
    readonly method = 'GET';
    readonly headers;

    constructor(args: {channelAccessToken: string}) {
        this.headers = {
            'Authorization': `Bearer ${args.channelAccessToken}`,
        };
    }
}

export class LiffAppDeleteRequest implements LiffApiRequestBase {
    readonly endpoint: string;
    readonly method = 'DELETE';
    readonly headers;

    constructor(args: {channelAccessToken: string, liffId: string}) {
        this.endpoint = `/liff/v1/apps/${args.liffId}`
        this.headers = {
            'Authorization': `Bearer ${args.channelAccessToken}`,
        };
    }
}