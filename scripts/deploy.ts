import { ethers } from 'hardhat'

async function main() {
  const Greeter = await ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy('Hello world')

  const Token = await ethers.getContractFactory('Token')
  const token = await Token.deploy()

  await greeter.deployed()
  await token.deployed()

  console.log('Greeter deployed to:', greeter.address)
  console.log('Token deployed to:', token.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
