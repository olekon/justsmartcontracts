import config from '../../config.js';
import * as storage from './storage.js';

import contractListStub from '../stubs/contractListStub.js';

//returns list of user contracts or empty list (defines in the config)
export const getContractList = function() {
    let savedContracts = [];
    if(config.storage.contractList) {
        savedContracts = storage.getContracts();
    }
    if(config.stub.contracts.use) {
        Array.prototype.push.apply(savedContracts, contractListStub);
    }
    return savedContracts;
}

//returns saved active contract from storage
export const getInitialContract = function(contractList) {
    if(config.storage.activeContract) {
        let activeContract = storage.getActiveContract();
        return activeContract ? getContract(contractList, activeContract.name, activeContract.networkId) : undefined;
    } else {
        return undefined;
    }
}

//saves active contract to storage
export const saveActiveContract = function(contract) {
    storage.saveActiveContract(contract);
}

//checks exist or not contract with this name and networkId
export const existContract = function(contractList, name, networkId) {
    return getContract(contractList, name, networkId) != undefined;
}

//adds a new custom contract to the list and saves it in storage
//returns list of contracts with new contract 
export const addContract = function(contractList, name, address, networkId, abi) {
    let contract = {
        address: address,
        name : name,
        networkId : networkId,
        abi : JSON.parse(abi)
    }

    contractList.push(contract);
    storage.saveContracts(contractList);

    return contractList;
}

//deletes a contract from list and returns contract list without this contract
export const deleteContract = function(contractList, contract) {
    let index = contractList.indexOf(contract);
    contractList.splice(index, 1);

    storage.saveContracts(contractList);
    return contractList;
}

//return contract with specified name and networkId
export const getContract = function(contractList, name, networkId) {
    return contractList.find(contract=>contract.name === name && contract.networkId === networkId);
}

//return first contract in list with specified networkId
export const getFirstContract = function(contractList, networkId) {
    let contracts = contractList.filter(contract=>contract.networkId === networkId);
    return contracts.length > 0 ? contracts[0] : undefined;
}