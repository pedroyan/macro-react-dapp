import { ethers } from 'hardhat'

async function main() {
  const greeterFactory = await ethers.getContractFactory('Greeter')
  const greeter = await greeterFactory.deploy('Hello world')

  const Token = await ethers.getContractFactory('Token')
  const token = await Token.deploy()

  const ndTokenFactory = await ethers.getContractFactory('NDToken')
  const ndToken = await ndTokenFactory.deploy('NDToken', 'NDT')

  await greeter.deployed()
  await token.deployed()
  await ndToken.deployed()

  console.log('Greeter deployed to:', greeter.address)
  console.log('Token deployed to:', token.address)
  console.log('NDToken deployed to:', ndToken.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
