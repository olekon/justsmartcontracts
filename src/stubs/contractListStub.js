let contractListStub = [
	{
		"address": "0x72251f33a019bc21d409d9f5ee10f5f5435242f2",
		"name": "AffStorage",
		"networkId": "3",
		"abi": [
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "affiliates",
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
						"name": "",
						"type": "address"
					}
				],
				"name": "affiliateSet",
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
						"name": "vendor",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "affiliate",
						"type": "address"
					}
				],
				"name": "AffiliateSet",
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
				"constant": false,
				"inputs": [
					{
						"name": "vendor",
						"type": "address"
					},
					{
						"name": "affiliate",
						"type": "address"
					}
				],
				"name": "setAffiliate",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},
	{
		"address": "0x5d2799025cf9abd6ee628bc4f812e72736c01e79",
		"name": "Storage",
		"networkId": "3",
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
	},
	{
		"address": "0xd4d95f6d2392bf954e54ea0ea0426acc0b363c8c",
		"name": "Token",
		"networkId": "3",
		"abi": [
			{
				"constant": true,
				"inputs": [],
				"name": "name",
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
				"constant": false,
				"inputs": [
					{
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"name": "success",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "transferLocked",
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
						"name": "",
						"type": "address"
					}
				],
				"name": "transferAllowed",
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
				"name": "totalSupply",
				"outputs": [
					{
						"name": "total",
						"type": "uint256"
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
						"name": "newAgent",
						"type": "address"
					}
				],
				"name": "setValueAgent",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"name": "",
						"type": "uint8"
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
						"name": "agent",
						"type": "address"
					}
				],
				"name": "setReturnAgent",
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
				"name": "transferLockUntil",
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
				"inputs": [],
				"name": "getValuableTokenAmount",
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
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"name": "balance",
						"type": "uint256"
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
				"name": "symbol",
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
				"constant": false,
				"inputs": [
					{
						"name": "agent",
						"type": "address"
					}
				],
				"name": "removeReturnAgent",
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
				"name": "returnAgents",
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
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "tokens",
						"type": "uint256"
					}
				],
				"name": "getRealTokenAmount",
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
				"constant": false,
				"inputs": [
					{
						"name": "holder",
						"type": "address"
					},
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "setReserved",
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
				"name": "reserved",
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
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"name": "remaining",
						"type": "uint256"
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
				"inputs": [],
				"name": "reservedAmount",
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
				"inputs": [
					{
						"name": "_initialSupply",
						"type": "uint256"
					},
					{
						"name": "_decimals",
						"type": "uint8"
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
						"indexed": false,
						"name": "sender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Burn",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_from",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_spender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "Approval",
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
				"inputs": [
					{
						"name": "holder",
						"type": "address"
					}
				],
				"name": "canTransfer",
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
						"name": "holder",
						"type": "address"
					},
					{
						"name": "daysFromNow",
						"type": "uint256"
					}
				],
				"name": "lockTransferFor",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "holder",
						"type": "address"
					},
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "allowTransferFor",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "setLockedState",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},
	{
		"address": "0xd203eac04c80347919afa97c634a2e7b269e7e8d",
		"name": "EtherPrice",
		"networkId": "3",
		"abi": [
			{
				"constant": true,
				"inputs": [],
				"name": "rate",
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
						"indexed": false,
						"name": "rate",
						"type": "uint256"
					}
				],
				"name": "RateUpdated",
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
				"constant": false,
				"inputs": [
					{
						"name": "newRate",
						"type": "uint256"
					}
				],
				"name": "updateRate",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},
	{
		"address": "0x9754f02B4511837F0AEa9c2ca4074C4223835bEC",
		"name": "payment",
		"networkId": "3",
		"abi": [
			{
				"constant": true,
				"inputs": [],
				"name": "activeState",
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
						"name": "amount",
						"type": "uint256"
					},
					{
						"name": "to",
						"type": "address"
					}
				],
				"name": "withdrawEtherTo",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "feePolicy",
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
				"name": "etherPriceProvider",
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
				"name": "productStorage",
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
				"constant": false,
				"inputs": [
					{
						"name": "state",
						"type": "bool"
					}
				],
				"name": "setActive",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "converter",
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
						"name": "",
						"type": "uint256"
					}
				],
				"name": "convertPath",
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
				"name": "escrowProvider",
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
				"name": "revokedStorage",
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
				"name": "discountPolicy",
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
				"inputs": [],
				"name": "token",
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
				"inputs": [
					{
						"name": "_productStorage",
						"type": "address"
					},
					{
						"name": "_escrowProvider",
						"type": "address"
					},
					{
						"name": "_feePolicy",
						"type": "address"
					},
					{
						"name": "_discountPolicy",
						"type": "address"
					},
					{
						"name": "_revokedStorage",
						"type": "address"
					},
					{
						"name": "_token",
						"type": "address"
					},
					{
						"name": "_etherPriceProvider",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "buyer",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "vendor",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "purchaseId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "clientId",
						"type": "string"
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
						"name": "discount",
						"type": "uint256"
					}
				],
				"name": "ProductBought",
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
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "PurchaseRevoked",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "escrow",
						"type": "address"
					},
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
						"indexed": false,
						"name": "refundPct",
						"type": "uint8"
					}
				],
				"name": "DisputeResolved",
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
						"indexed": true,
						"name": "customer",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "ComplainMade",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "customer",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "DeliverConfirmed",
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
				"constant": false,
				"inputs": [
					{
						"name": "_converter",
						"type": "address"
					},
					{
						"name": "_convertPath",
						"type": "address[]"
					}
				],
				"name": "setConvertParams",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_productStorage",
						"type": "address"
					},
					{
						"name": "_escrowProvider",
						"type": "address"
					},
					{
						"name": "_feePolicy",
						"type": "address"
					},
					{
						"name": "_discountPolicy",
						"type": "address"
					},
					{
						"name": "_revokedStorage",
						"type": "address"
					},
					{
						"name": "_token",
						"type": "address"
					},
					{
						"name": "_etherPriceProvider",
						"type": "address"
					}
				],
				"name": "setParams",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
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
						"name": "units",
						"type": "uint256"
					},
					{
						"name": "acceptLessUnits",
						"type": "bool"
					}
				],
				"name": "getUnitsToBuy",
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
				"name": "canWithdrawPending",
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
					},
					{
						"name": "purchaseId",
						"type": "uint256"
					}
				],
				"name": "esrowHoldTimeElapsed",
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
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "units",
						"type": "uint256"
					},
					{
						"name": "clientId",
						"type": "string"
					},
					{
						"name": "acceptLessUnits",
						"type": "bool"
					},
					{
						"name": "currentPrice",
						"type": "uint256"
					}
				],
				"name": "buyWithEth",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "tokens",
						"type": "uint256"
					},
					{
						"name": "productId",
						"type": "uint256"
					},
					{
						"name": "units",
						"type": "uint256"
					},
					{
						"name": "clientId",
						"type": "string"
					},
					{
						"name": "acceptLessUnits",
						"type": "bool"
					},
					{
						"name": "currentPrice",
						"type": "uint256"
					}
				],
				"name": "buyWithTokens",
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
					}
				],
				"name": "complain",
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
					}
				],
				"name": "confirmDeliver",
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
					}
				],
				"name": "revoke",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
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
						"name": "refundPct",
						"type": "uint8"
					}
				],
				"name": "resolve",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "productIds",
						"type": "uint256[]"
					},
					{
						"name": "purchaseIds",
						"type": "uint256[]"
					}
				],
				"name": "withdrawPendingPayments",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	},
	{
		"address": "0x5858832fb75d7c47fE8A5A85CBcB645eC62AC21f",
		"name": "revokedStorage",
		"networkId": "3",
		"abi": [
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
				"name": "revokedPurchases",
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
				"name": "escrowFee",
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
						"name": "productId",
						"type": "uint256"
					},
					{
						"indexed": true,
						"name": "purchaseId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "state",
						"type": "bool"
					}
				],
				"name": "RevokedFlagSet",
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
						"indexed": false,
						"name": "fee",
						"type": "uint256"
					}
				],
				"name": "EscrowFeeSet",
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
						"name": "revoked",
						"type": "bool"
					}
				],
				"name": "setRevokedFlag",
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
						"name": "fee",
						"type": "uint256"
					}
				],
				"name": "saveEscrowFee",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		]
	}
];

export default contractListStub;