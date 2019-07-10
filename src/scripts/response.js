
//общий метод для возврата успешного запроса
export const success = function(data) {
    return ({error : false, result : data});
}

//общий метод для возврата запроса с ошибкой 
export const error = function(errorCode) {
    return ({error : true, errorCode : errorCode, result : null});
}

export const successSignMessage = function(message, signed, signer, wallet) {
    var result = {};
    result.message = message;
    result.signedMessage = signed;
    result.signer = signer;
    result.key = wallet;
    return this.success(result);
}