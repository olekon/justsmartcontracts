import React from 'react';
import {notification} from 'antd';
import {getTxHashUrl} from '../../scripts/etherscan.js';
import errorText from '../../scripts/errorText.js';
import errorCodes from '../../scripts/errorCodes.js';

const getExplorerLink = (networkId, txHash) => 
    (<a href={getTxHashUrl(networkId, txHash)} target='_blank'>Check Etherscan</a>);

const getAdditionalText = (errorCode, data) => {
    switch (errorCode) {
        case errorCodes.notifyTransactionSent:
            return (<p>{getExplorerLink(data.networkId, data.txHash)}</p>);

        case errorCodes.errorArguments:
            return (<p>{data.toString()}</p>);

        default: 
            return null;
    }
}

const getErrorMessage = (errorCode, data) => {
    return (
        <>
            <p>{errorText[errorCode]}</p>
            {getAdditionalText(errorCode, data)}
        </>
    );
}


/**
 * Shows error message with text specified by error code 
 * @param {error code} errorCode 
 * @param {additional data} data 
 */
export const showError = (errorCode, data) => {
    const description = getErrorMessage(errorCode, data);
    notification.error({
        message: 'Error',
        description
    });
};


/**
 * Shows notification message with text specified by code 
 * @param {message code} code 
 * @param {additional data} data 
 */
export const showNotification = (code, data) => {
    const description = getErrorMessage(code, data);
    notification.info({
        message: 'Info',
        description
    });
}


/**
 * Shows notification for 'transaction sent' event
 * @param {networkId/chainId} networkId 
 * @param {transaction hash} txHash 
 */
export const showTransactionSent = (networkId, txHash) =>
    showNotification(errorCodes.notifyTransactionSent, {networkId, txHash});

export const showEstimateGasError = () => showError(errorCodes.errorEstimateGas);

export const showArgumentsError = (error) => showError(errorCodes.errorArguments, error);

export const showNodeExist = () => showError(errorCodes.nodeAlreadyExist, '');

export const showContractExist = () => showError(errorCodes.contractAlreadyExist, '');
