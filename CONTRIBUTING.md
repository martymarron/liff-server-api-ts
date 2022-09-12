Contributing
===

Description
---
This documents describes how to setup the development environment for this package.

Table of Contents
---
1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Test](#test)
4. [Submit PR](#submit-pr)

Prerequisites
---
- [NVM](https://github.com/nvm-sh/nvm)

Setup
---
First off, folk this repository.\
And then, clone that to your local and install dependencies as follows.

```sh
% clone git@github.com:<your-project>/liff-server-api-ts.git
% cd liff-server-api-ts
% nvm use
% npm install
```

Development
---
To make any changes, it's helpful to understand the basic structure of this package.\
The `src` directory stores all the production code, and `__tests__` directory stores its test cases.\
Under the `src` directory, there are several subdirectories to classify various modules.

1. `client`: Modules in this directory are responsible for handling sending the request to API endpoints, and receiving the response from them.
1. `entity`: Modules in this directory store types, interfaces, or classes to describe data structures that API provides.
1. `request`: Modules in this directory store objects that describes API requests.
1. `response`: Modules in this directory store objects that describes API responses.

Create a new branch from the `main` branch. if you make any changes.

Whenerver you change to exisiting modules, or add new modules, you must implement corresponding test cases as well.

Publish
---
To reflect your change to the package published, please send the pull request to the folk origin.\
Once your pull request is approved and merged, you change will be reflected to the package.

---
*EOD*