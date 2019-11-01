var Web3 = require('web3');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,      
      gasPrice: 15000000000,      
      network_id: "*" // Match any network id
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
};
