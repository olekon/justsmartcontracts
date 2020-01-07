import React, { PureComponent } from 'react';
import { getTxHashUrl, getAddressUrl, getRootUrl } from '../../scripts/etherscan';

/**
 * Hyperlink to transaction, address, etc. on Etherscan website.
 * Priority of parameters: tx > address. If multiple are set, the higher one takes precedence.
 * For example if tx and address are both set, link points to tx page. If none is set, points to home page
 * 
 * Props:
 * networkId - network identifier, if undefined, points to mainnet site
 * tx - hash of transaction, if set, points to transaction page
 * address - Ethereum address, if set, points to address page. 
 */
const EtherscanLink = ({ networkId = 1, txHash, address, children }) => {
    const url = txHash ? getTxHashUrl(networkId, txHash) :
        address ? getAddressUrl(networkId, address) : getRootUrl(networkId);

    const text = txHash || txHash || address || url;

    return (
        <a href={url} target='_blank'>
            {children || text}
        </a>
    );
};

export default EtherscanLink;