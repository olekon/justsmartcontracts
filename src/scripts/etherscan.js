/**
 * Utilities for etherscan-related staff
 */

import config from '../../config';
import urljoin from 'url-join';

/**
 * Returns pair of values {domain, api} that corresponds to etherscan subdomain and backend api sub-route
 * @param {*} networkId network identifier 1/3/4/5/42
 */
const getConfig = (networkId) => {
    switch (networkId) {
        case '1':
        case 1:
            return {domain: 'etherscan', api: 'mainnet'};
        case '3':
        case 3:
            return {domain: 'ropsten.etherscan', api: 'ropsten'};
        case '4':
        case 4:
            return {domain: 'rinkeby.etherscan', api: 'rinkeby'};
        case '5':
        case 5:
            return {domain: 'goerli.etherscan', api: 'goerli'};
        case '42':
        case 42:
            return {domain: 'kovan.etherscan', api: 'kovan'};
        default:
            return {domain: '', api: ''};
    }
}

/**
 * Checks if specific network id belongs to known public network
 * @param {*} networkId network id
 */
export const isPublicNetowrk = networkId => getConfig(networkId).domain != '';

/**
 * Returns etherscan website url
 * @param {*} networkId 
 */
export const getRootUrl = networkId => `https://${getConfig(networkId).domain}.io/`;

/**
 * Returns etherscan url to check specific transaction
 * @param {*} networkId 
 * @param {*} txHash 
 */
export const getTxHashUrl = (networkId, txHash) => urljoin(getRootUrl(networkId), `/tx/${txHash}`);

/**
 * Returns url of api that gets contract ABI 
 * @param {*} networkId 
 * @param {*} address 
 */
export const getApiAbiUrl = (networkId, address) =>
    urljoin(config.server.url, `/etherscan/abi/${getConfig(networkId).api}/${address}`);
