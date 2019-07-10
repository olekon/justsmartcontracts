import errorCodes from './errorCodes.js';

export default {
    [errorCodes.metamaskConnectFailed]: 'Can\'t connect via Metamask. Please check it’s installed',
    [errorCodes.metamaskLocked]: 'Please check Metamask is configured properly and your account is unlocked',
    [errorCodes.metamaskWrongNetwork]: 'Wrong network selected in Metamask. Please select appropriate network.',
    [errorCodes.metamaskWrongAccount]: 'Wrong account selected in Metamask. Please select correct \'From\' account',
    [errorCodes.metamaskReject]: 'Transaction rejected',
    [errorCodes.metamaskMessageSignReject]: 'Transaction wasn\'t signed',
    [errorCodes.metamaskRejectAccess]: 'Please allow this website to access Metamask',
    [errorCodes.notifyTransactionSent]: 'Transaction sent',
    [errorCodes.errorEstimateGas]: 'Gas required exceeds allowance or always failing transaction',
    [errorCodes.errorArguments]: 'Invalid arguments',
    [errorCodes.nodeAlreadyExist]: 'Node with this name already exist',
    [errorCodes.contractAlreadyExist]: 'Contract with this name already exist in this network'
};