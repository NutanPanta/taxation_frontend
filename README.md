# TAXATION

To get started with this project, follow these steps:

- Clone the repository using git clone.
  ```js
    git clone git@github.com:/taxation_frontend.git
  ```
- Run npm install to install the necessary dependencies.
  ```js
    npm install
  ```
- Create a `.env` file to configure your cognito and api environments

- To run in development mode
  ```js
    npm run serve
  ```
- To run in production mode
  ```js
    npm run start
  ```

## Environment Variables

The following environment variables are used in this project:

```
REACT_APP_CORE_END_POINT=The URL of core api
NODE_ENV=development or production
```

You can set these variables in a .env file in the root of the project.

## Building for Production

To build the project for production, run:

```js
npm run build
```

This will create a dist folder with the optimized, minified files.
