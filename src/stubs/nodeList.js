let nodeList = [
    {
        type : "Mainnet",
        nodes : [
            {
                name : "Infura",
                key  : "Mainnet_Infura",
                endpoint : "https://mainnet.infura.io/v3/66da5cb67dd949f585d950b0c588c06e",
                id : "1",
            },
            {
                name : "Mew",
                key  : "Mainnet_mew",
                endpoint : "https://mainnet.infura.io/mew",
                id : "1",
            },
            {
                name : "JSC",
                key  : "Mainnet_Back",
                endpoint : "http://localhost:3000/eth/main",
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
                endpoint : "https://ropsten.infura.io/v3/66da5cb67dd949f585d950b0c588c06e",
                id : "3",
            },
            {
                name : "JSC",
                key  : "Ropsten_Back",
                endpoint : "http://localhost:3000/eth/rop",
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
                endpoint : "https://rinkeby.infura.io/v3/66da5cb67dd949f585d950b0c588c06e",
                id : "4",
            }
        ]
    }
]

export default nodeList;