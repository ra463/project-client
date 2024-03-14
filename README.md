# React + TypeScript + Vite + Tailwind

## Server is hosted on Render

- Server hosted on render so wait for atleast 1 minute foe server to respond
- Maybe while using deployed version of app PDF may not Generate
- To generate PDF run server & client both locally
- To run this project just `clone` these both repo and run locally

```js
Server - https://github.com/ra463/project-server.git
Client - https://github.com/ra463/project-client.git

// Set ENV for running in localhost for server
JWT_SECRET=dtyhejfgeyggsjedgjurgehjjdkbhjjsbdkjnfmdekhjnnsh272u3ty2jhvhrejdt

JWT_EXPIRE=2d

PORT=4000

MONGO_URI="your mongo url"

- To install the dependencies run
`npm i`

- After doing this change the baseURL of server to 
`http://localhost:4000` - in axiosUtils.ts file

- After doing this run
`npm run dev` - in both the terminal
```