import Web3 from 'web3';

/** Application-wide provider of the web3 object*/
class Web3Provider {
    constructor(defaultEndpoint, chainId) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(defaultEndpoint));
        this.chainId = chainId;
    }

    /**creates web3 contract object using the ABI and address provided */
    getContract(abi, address) {
        let contract = new this.web3.eth.Contract(abi, address);
        if(contract.web3 === undefined) {
            contract.web3 = this.web3;
            contract.chainId = this.chainId;            
        }
        return contract;
    }

    // /**sets the active node by key */
    // setActiveNode(endpoint) {
    //     this.web3 = new Web3(new Web3.providers.HttpProvider(endpoint));
    // }

    /**
     * Wrap for web3.eth.sendSignedTransaction. Returns promise
     * @param {*} signedTx signed transaction data in HEX format 
     */
    sendSignedTx(signedTx) {
        return this.web3.eth.sendSignedTransaction(signedTx);
    }
}

export default Web3Provider;    
