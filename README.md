# tokens
all kinds of tokens

## Mintable ERC20
Anyone can mint up to 5 times the preset mintable amount. Only owner can change the mintable amount per mint.
* Run `npx hardhat run scripts/deployMintableERC20.js --network ropsten`.
* Run `npx hardhat verify --network ropsten {address} 'WETH by Pumpkin' 'pWETH' '18' ` to verify on Etherscan.