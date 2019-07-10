
let contractListStub2 = [
    {	
        "address": "0xb4407217ccb266ea64be0e77dc430fec00373c76",
		"name": "storage",
		"networkId": "1",
        "abi": [
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "vendors",
				"outputs": [
					{
						"name": "wallet",
						"type": "address"
					},
					{
						"name": "feePermille",
						"type": "uint16"
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
						"type": "uint256"
					}
				],
				"name": "products",
				"outputs": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"name": "isActive",
						"type": "bool"
					},
					{
						"name": "soldUnits",
						"type": "uint256"
					},
					{
						"name": "startTime",
						"type": "uint256"
					},
					{
						"name": "endTime",
						"type": "uint256"
					},
					{
						"name": "useEscrow",
						"type": "bool"
					},
					{
						"name": "useFiatPrice",
						"type": "bool"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "data",
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
				"constant": false,
				"inputs": [
					{
						"name": "manager",
						"type": "address"
					},
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "setManager",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "escrowData",
				"outputs": [
					{
						"name": "customer",
						"type": "address"
					},
					{
						"name": "fee",
						"type": "uint256"
					},
					{
						"name": "profit",
						"type": "uint256"
					},
					{
						"name": "timestamp",
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
						"type": "uint256"
					}
				],
				"name": "banned",
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
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
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
				"name": "managers",
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
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "id",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "price",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "isActive",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "startTime",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "endTime",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "useEscrow",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "useFiatPrice",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "name",
						"type": "string"
					},
					{
						"indexed": false,
						"name": "data",
						"type": "string"
					}
				],
				"name": "ProductAdded",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "id",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "buyer",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "price",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "paidUnits",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "clientId",
						"type": "string"
					}
				],
				"name": "PurchaseAdded",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "price",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "useFiatPrice",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "isActive",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "startTime",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "endTime",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "useEscrow",
						"type": "bool"
					},
					{
						"indexed": false,
						"name": "name",
						"type": "string"
					},
					{
						"indexed": false,
						"name": "data",
						"type": "string"
					}
				],
				"name": "ProductEdited",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "feePolicy",
						"type": "address"
					}
				],
				"name": "CustomParamsSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "vendor",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "wallet",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "feePermille",
						"type": "uint16"
					}
				],
				"name": "VendorInfoSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "purchaseId",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "customer",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "fee",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "profit",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"name": "EscrowDataSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "manager",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "state",
						"type": "bool"
					}
				],
				"name": "ManagerSet",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getTotalProducts",
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
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getTextData",
				"outputs": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "data",
						"type": "string"
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
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getProductData",
				"outputs": [
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"name": "soldUnits",
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
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getProductActivityData",
				"outputs": [
					{
						"name": "active",
						"type": "bool"
					},
					{
						"name": "startTime",
						"type": "uint256"
					},
					{
						"name": "endTime",
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
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getProductOwner",
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
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getProductPrice",
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
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "isEscrowUsed",
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
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "isFiatPriceUsed",
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
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "isProductActive",
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
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					}
				],
				"name": "getTotalPurchases",
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
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "getPurchase",
				"outputs": [
					{
						"name": "state",
						"type": "uint8"
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
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "getEscrowData",
				"outputs": [
					{
						"name": "",
						"type": "address"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
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
						"name": "vendor",
						"type": "address"
					}
				],
				"name": "getVendorWallet",
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
				"inputs": [
					{
						"name": "vendor",
						"type": "address"
					}
				],
				"name": "getVendorFee",
				"outputs": [
					{
						"name": "",
						"type": "uint16"
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
						"name": "vendor",
						"type": "address"
					},
					{
						"name": "wallet",
						"type": "address"
					},
					{
						"name": "feePermille",
						"type": "uint16"
					}
				],
				"name": "setVendorInfo",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"name": "isActive",
						"type": "bool"
					},
					{
						"name": "startTime",
						"type": "uint256"
					},
					{
						"name": "endTime",
						"type": "uint256"
					},
					{
						"name": "useEscrow",
						"type": "bool"
					},
					{
						"name": "useFiatPrice",
						"type": "bool"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "data",
						"type": "string"
					}
				],
				"name": "createProduct",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "maxUnits",
						"type": "uint256"
					},
					{
						"name": "isActive",
						"type": "bool"
					},
					{
						"name": "startTime",
						"type": "uint256"
					},
					{
						"name": "endTime",
						"type": "uint256"
					},
					{
						"name": "useEscrow",
						"type": "bool"
					},
					{
						"name": "useFiatPrice",
						"type": "bool"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "data",
						"type": "string"
					}
				],
				"name": "editProduct",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "soldUnits",
						"type": "uint256"
					}
				],
				"name": "changeSoldUnits",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "changeOwner",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "banProduct",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "buyer",
						"type": "address"
					},
					{
						"name": "price",
						"type": "uint256"
					},
					{
						"name": "paidUnits",
						"type": "uint256"
					},
					{
						"name": "clientId",
						"type": "string"
					}
				],
				"name": "addPurchase",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "purchaseId",
						"type": "uint256"
					},
					{
						"name": "state",
						"type": "uint8"
					}
				],
				"name": "changePurchase",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "purchaseId",
						"type": "uint256"
					},
					{
						"name": "customer",
						"type": "address"
					},
					{
						"name": "fee",
						"type": "uint256"
					},
					{
						"name": "profit",
						"type": "uint256"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"name": "setEscrowData",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
    }
]
export default contractListStub2;