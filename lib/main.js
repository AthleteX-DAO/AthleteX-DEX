window.addEventListener('load', function() {
		if (typeof web3 !== 'undefined') {
			document.getElementById('logooverlay').style.visibility='hidden';
			startApp(web3);
			startApp2(web3);
		} else {
		}
	})

	const abi = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_feeToSetter",
					"type": "address"
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
					"internalType": "address",
					"name": "token0",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "token1",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "pair",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "PairCreated",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "INIT_CODE_PAIR_HASH",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
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
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "allPairs",
			"outputs": [
				{
					"internalType": "address",
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
			"name": "allPairsLength",
			"outputs": [
				{
					"internalType": "uint256",
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
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				}
			],
			"name": "createPair",
			"outputs": [
				{
					"internalType": "address",
					"name": "pair",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "feeTo",
			"outputs": [
				{
					"internalType": "address",
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
			"name": "feeToSetter",
			"outputs": [
				{
					"internalType": "address",
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
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "getPair",
			"outputs": [
				{
					"internalType": "address",
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
					"internalType": "address",
					"name": "_feeTo",
					"type": "address"
				}
			],
			"name": "setFeeTo",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "_feeToSetter",
					"type": "address"
				}
			],
			"name": "setFeeToSetter",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
	const contract_address = '0x778EF52b9c18dBCbc6B4A8a58B424eA6cEa5a551'
	const abi2 = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_factory",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_WAVAX",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "WAVAX",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountADesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAXMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidityAVAX",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAX",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountIn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountOut",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsIn",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsOut",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveB",
					"type": "uint256"
				}
			],
			"name": "quote",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAXMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityAVAX",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAX",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAXMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityAVAXSupportingFeeOnTransferTokens",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountAVAX",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAXMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityAVAXWithPermit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAX",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAVAXMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountAVAX",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityWithPermit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapAVAXForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactAVAXForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactAVAXForTokensSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForAVAX",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForAVAXSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactAVAX",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
	const contract_address2 = '0x7EFc361e568d0038cfB200dF9d9Be27943e19017'
	const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
	const etherValue = web3.toWei(10, 'ether');
	var address = ''

	web3.version.getNetwork((err, netId) => {
	  switch (netId) {
		case "1":
		  console.log('This is mainnet')
		  break
		case "2":
		  console.log('This is the deprecated Morden test network.')
		  break
		case "3":
		  console.log('This is the ropsten test network.')
		  break
		case "4":
		  console.log('This is the Rinkeby test network.')
		  break
		case "42":
		  console.log('This is the Kovan test network.')
		  break
		default:
		  console.log('This is an unknown network.')
	  }
	})

	var account = web3.eth.accounts[0];
	var accountInterval = setInterval(function() {
	  if (web3.eth.accounts[0] !== account) {
		account = web3.eth.accounts[0];
		location.reload();
	  }
	}, 100);

	function startApp(web3) {
		const eth = new Eth(web3.currentProvider)
		const token = eth.contract(abi).at(contract_address);
	}

	function startApp2(web3) {
		const eth2 = new Eth(web3.currentProvider)
		const token2 = eth.contract(abi2).at(contract_address2);
	}

	const myContract = web3.eth.contract(abi).at(contract_address);
	const myContract2 = web3.eth.contract(abi2).at(contract_address2);
	const constantConst = setInterval(intervalFunction, 3000);
	
	function intervalFunction () {
		myContract.viewInfo({from: account}, (err, result) => {
		});
	}

function create (tokenA, tokenB) {
	const eth = new Eth(web3.currentProvider)
	const myContract = eth.contract(abi).at(contract_address);
	web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
	myContract.createPair(tokenA, tokenB, { from: account})
}