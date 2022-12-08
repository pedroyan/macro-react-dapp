import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import * as dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    artifacts: './frontend/src/artifacts',
  },
  typechain: {
    outDir: './frontend/src/typechain',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },

    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY!],
    },
  },
}

export default config
