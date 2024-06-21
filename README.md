# Next.js Authentication with NextAuth.js

This project demonstrates how to implement authentication in a Next.js application using NextAuth.js with various authentication providers.

## Features

- **Session Strategy**: The `session: { strategy: 'jwt' }` configuration specifies that NextAuth.js is using JSON Web Tokens (JWT) for session management. After a user is authenticated, a JWT is issued and used to manage the session state.

  - **Providers**: This application supports authentication via Google, GitHub, and custom credentials (email/password):

  - **GoogleProvider** and **GitHubProvider**: OAuth providers configured with `clientId` and `clientSecret` for integration with Google and GitHub.

  - **CredentialsProvider**: Custom provider with an `authorize` function to handle email/password authentication. It uses bcrypt for secure password comparison against credentials stored in the database.

- **Custom Authentication Logic**: The `authorize` function in `CredentialsProvider` validates user credentials and returns the user object upon successful authentication. It includes error handling for cases where the user is not found or the password does not match, ensuring robust security and a smooth authentication flow.

- **Environment Variables**: Sensitive information like `clientId` and `clientSecret` for Google and GitHub providers are stored in environment variables (`process.env`) to maintain security and prevent exposing credentials in the source code.

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

### Notes:

- Replace placeholders like `your-google-client-id`, `your-google-client-secret`, `your-github-client-id`, `your-github-client-secret`, and `YOUR OWN DATABASE CONNECTION STRING` with your actual credentials and MongoDB URI.
- Provide additional instructions or configuration details specific to your application if necessary.
- Include any additional dependencies or libraries used in your project in the "Features" or "Getting Started" sections as needed.

This `README.md` file provides a clear overview of your Next.js authentication application, guiding users on setting up and running the project locally, and pointing them to relevant documentation for further learning. Adjust it according to your specific application requirements and deployment environment.
