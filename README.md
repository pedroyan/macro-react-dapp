# Macro React Dapp
This project was created as part of the 0xMacro Pre-Course admission work, which requires students to follow [this article](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13). 

Although the article uses simple JS for the frontend, I decided to go with Typescript due to it's type safety and ability to scale well with larger projects and engineering teams.

## Getting started

1. Install dependencies

    ```bash
    npm install
    cd frontend
    npm install
    cd ..
    ```

2. Start the local node

    ```bash
    npm run node
    ```

3. Compile the contracts
    
    ```bash
    npm run compile
    ```

4. Deploy the contracts

    ```bash
    npm run deploy
    ```

5. Start the React app
    
    ```bash
    cd frontend
    npm run start
    ```

## Deploying to Goerli
1. Create an `.env` file at the root of the repo with the following content:

    ```bash
    GOERLI_PRIVATE_KEY="Deployment PK"
    GOERLI_RPC_URL="https://goerli.infura.io/v3/<project_id>"
    ```
2. Run the deploy script

    ```bash
    npm run deploy:goerli
    ```

You can find a sample Greeter contract deployed [here](https://goerli.etherscan.io/address/0x3aF4a1Cc4117628CBb5dcA07df5F6BDBf7F72E04#code).