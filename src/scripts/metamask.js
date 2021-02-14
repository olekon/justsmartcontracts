import errorCodes from './errorCodes.js';

function Metamask() {
    var isLoaded = false;
    var deniedTransactionSignature = 'User denied transaction signature';

    //проверяет есть ли метамаск
    var _checkMetamaskPresence = function () {
        return !!window.ethereum;
    };

    //обрабатывает ошибки после отправки транзакции в метамаск
    var _processError = function (error) {
        if (
            error.message &&
            error.message.includes(deniedTransactionSignature)
        ) {
            return errorCodes.metamaskReject;
        }
        if (error.message && error.message.includes(deniedMessageSignature)) {
            return errorCodes.metamaskMessageSignReject;
        } else {
            return errorCodes.unknownError;
        }
    };

    //устанавливает точное значение газ лимита для метамаска
    var _setGasLimit = function (transaction) {
        //чтобы метамаск корректно понял переданное значение gasLimit и не пересчитвал его сам - нужно установить параметр gas в транзакции в нужное число
        transaction.gas = transaction.gasLimit;
        return transaction;
    };

    this.decrypt = function () {
        return new Promise(function (resolve, reject) {
            if (window.ethereum) {
                window.ethereum
                    .request({ method: 'eth_requestAccounts' })
                    .then(() => {
                        _decrypt()
                            .then((account) => {
                                resolve(account);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    })
                    .catch(() => {
                        //если пользователь отменил, то скидываем прогрузку, чтобы запросить повторно
                        isLoaded = false;
                        reject(errorCodes.metamaskRejectAccess);
                    });
            } else {
                reject(errorCodes.metamaskConnectFailed);
            }
        });
    };

    var _decrypt = function () {
        if (!_checkMetamaskPresence()) {
            return Promise.reject(errorCodes.metamaskConnectFailed);
        } else {
            return window.ethereum
                .request({ method: 'eth_accounts' })
                .then((accounts) => {
                    return accounts.length
                        ? accounts[0]
                        : Promise.reject(errorCodes.metamaskLocked);
                });
        }
    };

    this.sendTx = function (transaction) {
        let thisObject = this;
        return new Promise(function (resolve, reject) {
            //достаем аккаунт
            thisObject
                .decrypt()
                .then((account) => {
                    if (
                        transaction.from.toLowerCase() != account.toLowerCase()
                    ) {
                        reject(errorCodes.metamaskWrongAccount);
                    } else {
                        ethereum
                            .request({ method: 'net_version' })
                            .then((network) => {
                                if (transaction.chainId != network) {
                                    reject(errorCodes.metamaskWrongNetwork);
                                } else {
                                    window.ethereum
                                        .request({
                                            method: 'eth_sendTransaction',
                                            params: [
                                                {
                                                    ..._setGasLimit(
                                                        transaction
                                                    ),
                                                },
                                            ],
                                        })
                                        .then((result) => {
                                            resolve(result);
                                        }).catch(err => {
                                            reject(_processError(err));
                                        });
                                }
                            });
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
}

export default new Metamask();
