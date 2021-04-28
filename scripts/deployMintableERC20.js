const { upgrades } = require('hardhat');
const configs = require('./configs');

async function main() {
  const [ deployer ] = await ethers.getSigners();
  console.log(`Deployer address: ${deployer.address}`);
  const deployerBalance = await deployer.getBalance();
  console.log(`Deployer balance: ${deployerBalance}`);

  const provider = deployer.provider;
  const network = await provider.getNetwork();
  console.log(`Network: ${network.name} with chainId ${network.chainId}`);
  const envVars = configs[network.chainId];

  const networkGasPrice = (await provider.getGasPrice()).toNumber();
  const gasPrice = Math.ceil(networkGasPrice * 1.2);
  console.log(`Gas Price balance: ${gasPrice}`);
  
  const MintableERC20 = await ethers.getContractFactory('MintableERC20');

  // deploy a mintable token
  const pdai = await MintableERC20.deploy('Dai Stablecoin by Pumpkin', 'DAI', 18, { gasPrice });
  await pdai.deployed();
  console.log(`pdai address: ${pdai.address}`);

  const pwbtc = await MintableERC20.deploy('Wrapped BTC by Pumpkin', 'WBTC', 8, { gasPrice });
  await pwbtc.deployed();
  console.log(`pwbtc address: ${pwbtc.address}`);

  const pweth = await MintableERC20.deploy('Wrapped Ether by Pumpkin', 'WETH', 18, { gasPrice });
  await pweth.deployed();
  console.log(`pweth address: ${pweth.address}`);

  const pcover = await MintableERC20.deploy('Cover Protocol Governance Token by Pumpkin', 'COVER', 18, { gasPrice });
  await pcover.deployed();
  console.log(`pcover address: ${pcover.address}`);

  const pruler = await MintableERC20.deploy('Ruler Protocol by Pumpkin', 'RULER', 18, { gasPrice });
  await pruler.deployed();
  console.log(`pruler address: ${pruler.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
