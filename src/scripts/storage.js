const nodesField = 'customNodes';
const contractsField = 'contracts';
const activeNodeField = 'activeNode';
const activeContractField = 'activeContract';

//load custom nodes list from storage
export const getCustomNodes = function() {
    return JSON.parse(localStorage.getItem(nodesField));
}

//returns active node from storage
export const getActiveNode = function() {
    return JSON.parse(localStorage.getItem(activeNodeField));
}

//Saves and loads user custom networks and contracts from storage 
export const saveNetworks = function(networks) {
    localStorage.setItem(nodesField, JSON.stringify(networks));
}

//saves active node to local storage
export const saveActiveNode = function(nodeKey) {
    localStorage.setItem(activeNodeField, JSON.stringify(nodeKey));
}

//loads custom contracts from storage, returns empty array if no data in storage
export const getContracts = function() {
    return JSON.parse(localStorage.getItem(contractsField)) || [];
}

//saves active contract to local storage
export const saveActiveContract = function(contract) {
    let data = contract ?  {name:contract.name, networkId:contract.networkId} : {name:'', networkId:''}
    localStorage.setItem(activeContractField, JSON.stringify(data));
}

//loads active contract from storage
export const getActiveContract = function() {
    return JSON.parse(localStorage.getItem(activeContractField));
}

//saves contract list to local storage
export const saveContracts = function(contracts) {
    localStorage.setItem(contractsField, JSON.stringify(contracts));
}
