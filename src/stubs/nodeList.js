import config from '../../config.js';
import urljoin from 'url-join';

let nodeList = [
    {
        type: "Mainnet",
        nodes: [
            {
                name: "Infura",
                key: "Mainnet_Infura",                
                endpoint: urljoin(config.server.url, 'eth/mainnet'),
                id: "1",
            },
            {
                name: "MEW",
                key: "Mainnet_mew",
                endpoint: "https://api.myetherapi.com/eth",
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
                endpoint: urljoin(config.server.url, '/eth/ropsten'),
                id: "3",
            },
            {
                name: "MEW",
                key: "Ropsten_mew",
                endpoint: "https://api.myetherapi.com/rop",
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
                endpoint: urljoin(config.server.url, '/eth/rinkeby'),
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
                endpoint: urljoin(config.server.url, '/eth/kovan'),
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
                endpoint: urljoin(config.server.url, '/eth/goerli'),
                id: "5",
            }
        ]
    }
]

export default nodeList;