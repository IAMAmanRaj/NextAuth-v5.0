## Next Auth(Version 5)

This repository contains the source code for smooth authentication using various ways as laid out by Next Auth v5.0. You will find various Next-Auth implementation details and the source code in this repository.

## How to Set up and Run Locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- First, install dependencies using,

  ```bash
  npm install
  ```

- Create a `.env` file at the root of the project folder with the following content:

  ```bash
  GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
  GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_ID>
  GITHUB_CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
  GITHUB_CLIENT_SECRET=<YOUR_GITHUB_CLIENT_ID>
  AUTH_SECRET="Auth Secret"
  MONGO_DB_CONNECTION_STRING="YOUR OWN DATABASE CONNECTION STRING"
  ```

- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
