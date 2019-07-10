import config from '../../config.js';
import * as storage from './storage.js';
import defaultNodesList from '../stubs/nodeList';

const customNetworkType = 'My networks';
const customNodesPrefix = 'custom_';

//returns list of user nodes (default list + custom nodes)
export const getNetworkList = function() {
    let nodeList = [];
    nodeList = nodeList.concat(defaultNodesList);
    let network = {
        type: customNetworkType,
        nodes: []
    };
    if(config.storage.nodeList) {
        let customNodes = storage.getCustomNodes();
        if (customNodes) {
            network.nodes = network.nodes.concat(customNodes.nodes);
        }
    }
    nodeList.push(network);
    return nodeList;
}

//returns saved active node from storage or default node
export const getInitialNodeKey = function() {
    if(config.storage.activeNode) {
        let activeNode = storage.getActiveNode();
        return activeNode ? activeNode : config.network.defaultNodeKey;
    } else {
        return config.network.defaultNodeKey;
    }
}

//saves active node to storage
export const saveActiveNode = function(nodeKey) {
    storage.saveActiveNode(nodeKey);
}

//checks exist or not node with this name in custom node list
export const existCustomNode = function(nodeList, nodeName) {
    let key = getCustomNodeKey(nodeName);
    return nodeList.find(item => item.type === customNetworkType).nodes.find(node => node.key === key) != undefined;
}

//returns the custom node with specific nodeKey
export const getCustomNode = function(nodeList, nodeKey) {
    return nodeList.find(item => item.type === customNetworkType).nodes.find(node => node.key === nodeKey);
}

//adds a new custom node to the list and saves it in storage
//returns list of nodes with new node 
export const addCustomNode = function(nodeList, nodeName, endpoint, networkId) {
    let node = {
        name: nodeName,
        key: getCustomNodeKey(nodeName), 
        endpoint: endpoint,
        id: networkId,
    };

    nodeList.find(item => item.type === customNetworkType).nodes.push(node);
    storage.saveNetworks(nodeList.find(item => item.type === customNetworkType));
    return nodeList;
}

export const checkEditPossible = function(nodeList, oldNodeKey, nodeName) {
    //find the node with same name and check her nodeKey
    let key = getCustomNodeKey(nodeName);
    let node = nodeList.find(item => item.type === customNetworkType).nodes.find(node => node.name === nodeName);
    return node === undefined || node.key === oldNodeKey;
}

//deletes a custom node from list and returns list of nodes without this node
export const deleteCustomNode = function(nodeList, nodeKey) {
    let customNetworks = nodeList.find(item => item.type === customNetworkType);
    let node = customNetworks.nodes.find(node => node.key === nodeKey);
    let index = customNetworks.nodes.indexOf(node);

    customNetworks.nodes.splice(index, 1);;
    storage.saveNetworks(customNetworks);
    return nodeList;
}

export const editCustomNode = function(nodeList, nodeKey, nodeName, endpoint, networkId) {
    let customNetworks = nodeList.find(item => item.type === customNetworkType);
    let node = customNetworks.nodes.find(node => node.key === nodeKey);
    let index = customNetworks.nodes.indexOf(node);

    customNetworks.nodes[index] = {
                                    name: nodeName,
                                    key: getCustomNodeKey(nodeName), 
                                    endpoint: endpoint,
                                    id: networkId,
    }
    storage.saveNetworks(customNetworks);
    return nodeList;
}

export const getCustomNodeKey = function(nodeName) {
    return customNodesPrefix + nodeName;
}

export const getNetworkId = function(nodeKey) {
    let nodeList = getNetworkList();
    return nodeList.reduce((result, current) => {
        let tmp = current.nodes.filter(node => node.key == nodeKey);
        if(tmp.length > 0) {
            result.push(tmp);
        }
        return result;
    }, [])[0][0].id;
}