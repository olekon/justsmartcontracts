import config from '../../config.js';

let nodeList = [
    {
        type: "Mainnet",
        nodes: [
            {
                name: "Infura",
                key: "Mainnet_Infura",
                //endpoint : "https://justsmartcontracts.dev/jscapi/eth/main",
                endpoint: config.server.url + '/eth/main',
                id: "1",
            },
            {
                name: "MEW",
                key: "Mainnet_mew",
                endpoint: "https://mainnet.infura.io/mew",
                id: "1",
            }
        ]
    },
    {
        type: "Ropsten",
        nodes: [
            {
                name: "Infura",
                key: "Ropsten_Infura",
                //endpoint : "https://justsmartcontracts.dev/jscapi/eth/rop",
                endpoint: config.server.url + '/eth/ropsten',
                id: "3",
            }
        ]
    },
    {
        type: "Rinkeby",
        nodes: [
            {
                name: "Infura",
                key: "Rinkeby_Infura",
                //endpoint : "https://justsmartcontracts.dev/jscapi/eth/rin",
                endpoint: config.server.url + '/eth/rinkeby',
                id: "4",
            }
        ]
    },
    {
        type: "Kovan",
        nodes: [
            {
                name: "Infura",
                key: "Kovan_Infura",
                //endpoint : "https://justsmartcontracts.dev/jscapi/eth/kovan",
                endpoint: config.server.url + '/eth/kovan',
                id: "42",
            }
        ]
    },
    {
        type: "Goerli",
        nodes: [
            {
                name: "Infura",
                key: "Goerli_Infura",
                //endpoint : "https://justsmartcontracts.dev/jscapi/eth/goerli",
                endpoint: config.server.url + '/eth/goerli',
                id: "5",
            }
        ]
    }
]

export default nodeList;