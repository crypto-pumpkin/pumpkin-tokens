require("dotenv").config();

module.exports = {
	42: {
		network: 'Kovan',
		dai: process.env.KOVAN_DAI,
		wbtc: process.env.KOVAN_WBTC,
	},
	3: {
    env: 'Ropsten',
		dai: process.env.ROPSTEN_DAI,
		wbtc: process.env.ROPSTEN_WBTC,
  },
	1: {
		network: 'Mainnet',
	},
};
