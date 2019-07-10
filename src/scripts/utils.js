import * as web3utils from 'web3-utils';
import Transaction from 'ethereumjs-tx';

/**
 * Converts eth address to a shorter string deleting the middle
 * @param {Eth address to shorten} address 
 * @param {number of hex characters to keep in the beginning and the end of string} charsToKeep 
 */
export const shortenEthAddress = (address, charsToKeep) =>
    address.slice(0, 2 + charsToKeep) + '...' + address.slice(-charsToKeep);


/**
 * Checks if string is checksummed ethereum address
 * @param {string to check} address 
 */
export const isEthAddress = address => web3utils.isHexStrict(address) && address.length == 42;


/**
 * Returns checksummed eth address 
 * @param {ETH address} address 
 */
export const validateEthAddress = address => web3utils.toChecksumAddress(address);


/**
 * Returns web3 method object identifier - hash of contract's address and encodedABI 
 */
export const getMethodId = method => 
    web3utils.sha3(method._parent._address + method._method.name + method.arguments.join(''));


/**
 * Checks if method arguments are correct by calling internal encodeABI method.
 * Returns null if there are no errors. Otherwise returns error text
 * @param {} method 
 */
export const checkParamErrors = method => {
    try {
        method.encodeABI();
        return null;
    } catch(e) {
        return e;
    }
}


/**
 * Converts native Ethereum event object to a short form, keeps only 'returnValues', 'blockNumber' and tx hash
 * @param {event object, item of array returned from getPastEvents} event 
 * @param {name of unique key property in shortened object} keyProperty 
 */
export const shortenEvent = (event, keyProperty = 'key') =>
    //First keep only non-numeric returnValues (remove duplicate numeric)
    //Then attach 'key' property - txHash+logIndex
    Object.keys(event.returnValues)
        .filter(key => isNaN(parseInt(key)))
        .reduce(
            (obj, key) => ({...obj, [key]: event.returnValues[key]}),
            {
                [keyProperty]: event.transactionHash + event.logIndex,
                blockNumber: event.blockNumber,
                transactionHash: event.transactionHash
            }
        );


/**
 * Retrieves contract's Ether balance
 * @param {Web3 contract object} contract 
 */
export const getEtherBalance = contract => contract.web3.eth.getBalance(contract._address);


/**
 * Converts any wei value into a ether value.
 * @param {ether value in wei} wei 
 * @param {ether unit representing return value, 'wei'/'gwei'/'ether'} unit
 */
export const convertFromWei = (wei, unit) => web3utils.fromWei(wei, unit);

/**
 * Converts any ether value value into wei.
 * @param {ether value} value 
 * @param {ether unit representing input value} unit 
 */
export const convertToWei = (value, unit) =>
    web3utils.toWei(
        value,
        unit
    );


/**
 * Converts given value to HEX.
 * @param {Number or String to convert to HEX} value 
 */
export const toHex = value => web3utils.toHex(value);

const fromBuffer = buffer => '0x' + buffer.toString('hex');
/**
 * Converts signed transaction to unsigned, returns transaction and signature verification
 * @param {signed transaction, optionally prefixed with 0x} signedTx 
 */
export const unsignTransaction = (signedTx) => {
    const tx = new Transaction(signedTx);
    return {
        tx: {
            from: fromBuffer(tx.from),
            to: fromBuffer(tx.to),
            value: fromBuffer(tx.value),
            gas: fromBuffer(tx.gas),
            gasPrice: fromBuffer(tx.gasPrice),
            data: fromBuffer(tx.data),
            nonce: fromBuffer(tx.nonce),
        },
        verified: tx.verifySignature()
    };
};


/**
 * Returns default value for Solidity type
 * @param {Solidity type or 'ether'} type 
 */
export const getDefaultValue = type => {
    switch (type) {
        case 'bool':
            return false;
        case 'address':
            return '0x0';
        case 'eth':
        case 'ether':
            return 0;
        default:
            return '';
    }
}