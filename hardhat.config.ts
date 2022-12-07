import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

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
  },
}

export default config
