import fetch, { RequestInfo, RequestInit, Response } from 'node-fetch';
import { LiffAppCreateRequest, LiffAppDeleteRequest, LiffAppGetRequest, LiffAppUpdateRequest } from '../request/LiffApiRequest';
import { LiffApiGetResponse, LiffApiCreateResponse } from '../response/LiffApiGetResponse';

export class LiffApiClient {
    readonly baseUrl: string;

    constructor(
        baseUrl: string,
    ) {
        this.baseUrl = baseUrl;
    }

    async create(request: LiffAppCreateRequest): Promise<LiffApiCreateResponse> {
        const requestInfo: RequestInfo = `${this.baseUrl}${request.endpoint}`;
        const requestInit: RequestInit = {
            method: request.method,
            body: JSON.stringify(request.liffApp),
            headers: request.headers
        };

        const result: Response = await fetch(requestInfo, requestInit);
        if (result.ok) {
            const response: LiffApiCreateResponse = await result.json();
            return response;
        } else if (result.status === 400) {
            throw new InvalidLiffAppCreateRequestError();
        } else if (result.status === 401) {
            throw new LiffApiAuthenticationFailedError();
        } else {
            throw new Error(result.statusText);
        }
    }

    async update(request: LiffAppUpdateRequest): Promise<void> {
        const requestInfo: RequestInfo = `${this.baseUrl}${request.endpoint}`;
        const requestInit: RequestInit = {
            method: request.method,
            body: JSON.stringify(request.liffApp),
            headers: request.headers
        };

        const result: Response = await fetch(requestInfo, requestInit);
        if (result.ok) {
            return;
        } else if (result.status === 401) {
            throw new LiffApiAuthenticationFailedError();
        } else if (result.status === 404) {
            throw new NoSuchLiffAppError();
        } else {
            throw new Error(result.statusText);
        }
    }

    async getAll(request: LiffAppGetRequest): Promise<LiffApiGetResponse> {
        const requestInfo: RequestInfo = `${this.baseUrl}${request.endpoint}`;
        const requestInit: RequestInit = {
            method: request.method,
            headers: request.headers
        };

        const result = await fetch(requestInfo, requestInit);
        if (result.ok) {
            const response: LiffApiGetResponse = await result.json();
            return response;
        } else if (result.status === 401) {
            throw new LiffApiAuthenticationFailedError();
        } else if (result.status === 404) {
            const response: LiffApiGetResponse = {
                apps: []
            };
            return response;
        } else {
            throw new Error(result.statusText);
        }
    }

    async delete(request: LiffAppDeleteRequest): Promise<void> {
        const requestInfo = `${this.baseUrl}${request.endpoint}`;
        const requestInit = {
            method: request.method,
            headers: request.headers
        };

        const result = await fetch(requestInfo, requestInit);
        if (result.ok) {
            return;
        } else if (result.status === 401) {
            throw new LiffApiAuthenticationFailedError();
        } else if (result.status === 404) {
            throw new NoSuchLiffAppError();
        } else {
            throw Error(result.statusText);
        }
    }
}

export class InvalidLiffAppCreateRequestError extends Error {
    message = 'The request contains an invalid value';
}

export class NoSuchLiffAppError extends Error {
    message = 'The specified LIFF app does not exist';    
}

export class LiffApiAuthenticationFailedError extends Error {
    message = 'Authentication failed';
}
