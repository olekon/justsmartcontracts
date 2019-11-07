import * as web3utils from 'web3-utils';
import Transaction from 'ethereumjs-tx';

/**
 * Converts eth address to a shorter string deleting the middle
 * @param {*} address Eth address to shorten 
 * @param {*} charsToKeep number of hex characters to keep in the beginning and the end of string 
 */
export const shortenEthAddress = (address, charsToKeep) =>
    address.slice(0, 2 + charsToKeep) + '...' + address.slice(-charsToKeep);


/**
 * Checks if string is checksummed ethereum address
 * @param {*} address string to check
 */
export const isEthAddress = address => web3utils.isHexStrict(address) && address.length == 42;


/**
 * Returns checksummed eth address 
 * @param {*} address ETH address 
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
 * @param {*} method 
 */
export const checkParamErrors = method => {
    try {
        method.encodeABI();
        return null;
    } catch (e) {
        return e;
    }
}


/**
 * Converts native Ethereum event object to a short form, keeps only 'returnValues', 'blockNumber' and tx hash
 * @param {*} event event object, item of array returned from getPastEvents
 * @param {*} keyProperty name of unique key property in shortened object
 */
export const shortenEvent = (event, keyProperty = 'key') => {
    //First keep only non-numeric returnValues (remove duplicate numeric)
    //Then attach 'key' property - txHash+logIndex
    const keys = Object.keys(event.returnValues);
    const uniqueKeys = keys.filter(key => isNaN(parseInt(key)));
    const eventParams = uniqueKeys.length * 2 == keys.length ?
        uniqueKeys : keys;

    return eventParams
        .reduce(
            (obj, key) => ({...obj, [key.toString()]: event.returnValues[key]}),
            {
                [keyProperty]: event.transactionHash + event.logIndex,
                blockNumber: event.blockNumber,
                transactionHash: event.transactionHash
            }
        );
}

/**
 * Retrieves contract's Ether balance
 * @param {*} contract Web3 contract object
 */
export const getEtherBalance = contract => contract.web3.eth.getBalance(contract._address);


/**
 * Converts any wei value into a ether value.
 * @param {*} wei ether value in wei
 * @param {*} unit ether unit representing return value, 'wei'/'gwei'/'ether'
 */
export const convertFromWei = (wei, unit) => web3utils.fromWei(wei, unit);

/**
 * Converts any ether value value into wei.
 * @param {*} value ether value
 * @param {*} unit ether unit representing input value
 */
export const convertToWei = (value, unit) =>
    web3utils.toWei(
        value,
        unit
    );


/**
 * Converts given value to HEX.
 * @param {*} value Number or String to convert to HEX
 */
export const toHex = value => web3utils.toHex(value);

const fromBuffer = buffer => '0x' + buffer.toString('hex');
/**
 * Converts signed transaction to unsigned, returns transaction and signature verification
 * @param {*} signedTx signed transaction, optionally prefixed with 0x
 */
export const unsignTransaction = (signedTx) => {
    try {
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
    } catch (e) {
        return {
            tx: {},
            verified: false,
            error: e.message
        }
    }
};

/**
 * Converts hex fields 'gas','gasPrice','nonce','value' of transaction to decimals string
 * @param {*} tx transaction object
 */
export const unhexTransaction = tx => {
    const hexFields = ['nonce', 'gas', 'gasPrice', 'value', 'gasLimit'];
    let hexTx = tx;
    hexFields.forEach(value => {
        if (web3utils.isHexStrict(tx[value])) {
            hexTx[value] = web3utils.hexToNumberString(tx[value]);
        }
    });
    return hexTx;
};

/**
 * Converts non-hex fields 'gas','gasPrice','nonce','value' of transaction to hex string
 * @param {*} tx transaction object
 */
export const hexTransaction = tx => {
    const hexFields = ['nonce', 'gas', 'gasPrice', 'value', 'gasLimit'];
    let hexTx = tx;
    hexFields.forEach(value => {
        if (!web3utils.isHexStrict(tx[value])) {
            hexTx[value] = web3utils.toHex(tx[value]);
        }
    });
    return hexTx;
};

/**
 * Checks if type is array
 * @param {*} type - ABI type like 'address', 'uint256', 'uint16[]', etc. or 'eth'
 */
export const isArrayType = type => type.endsWith(']');

/**
 * Extracts array single item type
 * @param {*} arrayType ABI array type 
 */
export const getArrayItemType = arrayType => arrayType.slice(0, -2);

/**
 * Returns default value for Solidity type
 * @param {*} type Solidity type or 'ether'
 */
export const getDefaultValue = type => {
    switch (type) {
        case 'bool':
            return false;
        case 'address':
            return '0x0';
        case 'eth':
        case 'ether':
            return '0';
        default:
            if (isArrayType(type)) {
                return [];
            } else {
                return '';
            }
    }
}