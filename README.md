LIFF Server API Client
===
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/martymarron/liff-server-api-ts/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/martymarron/liff-server-api-ts/tree/main)
[![npm version](https://badge.fury.io/js/liff-server-api.svg)](https://badge.fury.io/js/liff-server-api)

Description
---
This is a [LIFF Server API](https://developers.line.biz/en/reference/liff-server/) client that is implemented by using [TypeScript](https://www.typescriptlang.org/).\
This provides the simple CRUD interfaces for your [LIFF apps](https://developers.line.biz/en/docs/liff/overview/).


Table of Contents
---
1. [Installation](#installation)
1. [Usage](#usage)
1. [Contributing](#contributing)
1. [Credits](#credits)
1. [Licensing](#licensing)

Installation
---
```
% npm install liff-server-api
```

Usage
---
## Issue access token
According to the [LIFF Server API reference](https://developers.line.biz/en/reference/liff-server/), a [channel access token](https://developers.line.biz/en/docs/messaging-api/channel-access-tokens/) is required to call any LIFF Server API endpoints.\
The snippet below issues a channel access token.\
\* Note: Replace `{YOUR_CHANNEL_ID}` and `{YOUR_CHANNEL_SECRET}` with your own credentials.

```ts
import { 
    MessageApiClient,
    IssueAccessTokenRequest,
    MessageApiResponse
} from 'liff-server-api';

const baseUrl = 'https://api.line.me';
const client = new MessageApiClient(baseUrl);
const request: IssueAccessTokenRequest 
    = new IssueAccessTokenRequest({
        channelId: '{YOUR_CHANNEL_ID}',
        channelSecret: '{YOUR_CHANNEL_SECRET}'
    });
const response: MessageApiResponse = await client.issueAccessToken(request);
const accessToken = response.access_token;
console.debug('access token: %s', accessToken);
```

## Invoke LIFF Server API
Once you get a channel access token, you next initialize the `LiffApiClient` object with the channel access token.\
Then, you're ready to call the server API.\
The snippet below initializes the `LiffApiClient` and invokes the `getAll()` method that calls the `/liff/v1/apps` endpoint which provides all the LIFF apps belonging to your channel.

```ts
import {
    LiffApiClient,
    LiffAppGetRequest,
    LiffApiGetRespoinse
} from 'liff-server-api';

const baseUrl = 'https://line.api.me';
const client: LiffApiClient = new LiffApiClient(baseUrl);
const request: LiffAppGetRequest
    = new LiffAppGetRequest({
            channelAccessToken: '{YOUR_ACCESS_TOKEN}'
    });
const response: LiffApiGetRespoinse = await client.getAll(request);
console.debug('Your LIFF apps: %O', response.apps);
```

Contributing
---
See [CONTRIBUTING.md](./CONTRIBUTING.md)

Credits
---
Masashi Kurita, [marty.marron@gmail.com](maileto:marty.marron@gmail.com)

Licensing
---
All rights reserved.

---
*EOD*
