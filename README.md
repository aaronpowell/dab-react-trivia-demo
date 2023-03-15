## Azure Static Web App Database Connections sample

This is a sample application on how to use the [Azure Static Web App Database Connections](https://aka.ms/swa/db/docs) feature to expose Cosmos DB with GraphQL.

The application is written in React (with TypeScript), uses [GraphQL Code Generator](https://graphql-code-generator.com/) to generate TypeScript types from the GraphQL schema, and [Apollo Client](https://www.apollographql.com/docs/react/) to query the GraphQL API.

You can learn more about it in the [companion blog post](https://www.aaron-powell.com/posts/2023-03-16-graphql-on-azure-part-13-using-dab-with-swa-and-react).

## Running the application

This repo contains a [VSCode devcontainer](https://code.visualstudio.com/docs/remote/containers) configuration, so you can open the repo in VSCode and have it provision a local Cosmos DB emulator instance for you. You can use the [Azure Database VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb) to connect to the emulator and create a database and collection. There's also a sample dataset that can be uploaded at `data/trivia.json`.

Once the database is provisioned you can run `npm install` followed by `npm start` then navigate to http://localhost:4280.
