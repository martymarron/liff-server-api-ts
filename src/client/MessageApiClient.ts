import fetch from 'node-fetch';
import { IssueAccessTokenRequest } from '../request/MessageApiRequest';
import { MessageApiResponse } from '../response/MessageApiResponse';

export class MessageApiClient {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async issueAccessToken(request: IssueAccessTokenRequest)
    : Promise<MessageApiResponse> {

        const requestInfo = `${this.baseUrl}${request.endpoint}`;
        const requestInit = {
            method: request.method,
            body: request.body,
            headers: request.headers
        };

        const result = await fetch(requestInfo, requestInit);
        if (result.ok) {
            const response: MessageApiResponse = await result.json();
            return response;
        } else {
            throw new Error(result.statusText);
        }
    }
}