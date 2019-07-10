export default [
	{
		address: "0xe82529530ca32b8874d874d6ae7475da85cdd237",
		name: "Test",
		networkId: "999",
		abi: [
			{
				"constant": true,
				"inputs": [],
				"name": "boolData",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "stringData",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "uintData",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "mapData",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "initialData",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "oldOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnerChanged",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "key",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "MapDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "string"
					}
				],
				"name": "StringDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "UintDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "bool"
					}
				],
				"name": "BoolDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "param",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "EtherPaid",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "EtherSent",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "key",
						"type": "address"
					}
				],
				"name": "getSomeValues",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "bool"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "setOwner",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "key",
						"type": "address"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setMapData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "string"
					}
				],
				"name": "setStringData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setUintData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "bool"
					}
				],
				"name": "setBoolData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "param",
						"type": "uint256"
					}
				],
				"name": "pay",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "to",
						"type": "address"
					}
				],
				"name": "withdrawTo",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [],
				"name": "clear",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},

	{
		address: "0x22D627bf43f5D28c2EB56042Cea43839c19caa40",
		name: "RopsTest",
		networkId: "3",
		abi: [
			{
				"constant": true,
				"inputs": [],
				"name": "boolData",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "stringData",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "uintData",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "mapData",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "initialData",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "oldOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnerChanged",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "key",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "MapDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "string"
					}
				],
				"name": "StringDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "UintDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "bool"
					}
				],
				"name": "BoolDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "param",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "EtherPaid",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "EtherSent",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "key",
						"type": "address"
					}
				],
				"name": "getSomeValues",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "bool"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "setOwner",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "key",
						"type": "address"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setMapData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "string"
					}
				],
				"name": "setStringData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setUintData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "value",
						"type": "bool"
					}
				],
				"name": "setBoolData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "param",
						"type": "uint256"
					}
				],
				"name": "pay",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "to",
						"type": "address"
					}
				],
				"name": "withdrawTo",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [],
				"name": "clear",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},

];