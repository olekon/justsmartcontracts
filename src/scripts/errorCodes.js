let errorCodes = {
    errorEstimateGas            : 1,    //always failing transaction
    errorArguments              : 2,    //input arguments are invalid

    metamaskConnectFailed       : 30,   //Can’t connect via Metamask. Please check it’s installed.
    metamaskLocked              : 31,   //Please check Metamask is configured properly and your account is unlocked'
    metamaskWrongNetwork        : 32,   //Invalid network chosen in Metamask
    metamaskWrongAccount        : 33,   //Your active Metamask account was changed
    metamaskReject              : 34,   //Transaction rejected
    metamaskRejectAccess        : 35,   //Unlock access rejected  

    metamaskException           : 39,   //Some exception from metamask web3 methods 

    nodeAlreadyExist            : 40,   //Attempt to add custom network which already exist
    contractAlreadyExist        : 41,   //Attempt to add custom contract which already exist
    
    notifyTransactionSent       : 101,
}

export default errorCodes