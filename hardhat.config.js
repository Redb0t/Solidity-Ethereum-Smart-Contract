require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: URL_RINKEBY,
      accounts: [META_ACCOUNT]
    },
  },
};