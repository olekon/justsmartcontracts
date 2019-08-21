let nodeList = [
    {
        type : "Mainnet",
        nodes : [
            {
                name : "Infura",
                key  : "Mainnet_Infura",
                endpoint : "https://justsmartcontracts.dev/jscapi/eth/main",
                //endpoint : "http://localhost:3000/eth/main",
                id : "1",
            },
            {
                name : "MEW",
                key  : "Mainnet_mew",
                endpoint : "https://mainnet.infura.io/mew",
                id : "1",
            }
        ]
    },
    {
        type : "Ropsten",
        nodes : [
            {
                name : "Infura",
                key  : "Ropsten_Infura",
                endpoint : "https://justsmartcontracts.dev/jscapi/eth/rop",
                //endpoint : "http://localhost:3000/eth/rop",
                id : "3",
            }
        ]
    },
    {
        type : "Rinkeby",
        nodes : [
            {
                name : "Infura",
                key  : "Rinkeby_Infura",
                endpoint : "https://justsmartcontracts.dev/jscapi/eth/rin",
                id : "4",
            }
        ]
    }
]

export default nodeList;