// AthleteX DEX Ethers.js integration (a way to interact with the blockchain from your website)
//
// The first thing we describe are the contracts that are being interfaced with, fai in 
// this case will refer to the contract and functions associated with AthleteXFactory.sol
//
// Replace faiAddress with the address of the AthleteXFactory.sol deploy
const faiAddress = "0x778EF52b9c18dBCbc6B4A8a58B424eA6cEa5a551";

// Typically (with web3) when you read the ABI it'll be in a non-human readable format that needs
// to be parsed and made available to pull in a human-readable way. It may be considered less forward,
// while with Ethers.js the way you describe each function and its parameters in the ABI is in a 
// human-readable format.

// Example of an external function converted to Ethers.js ABI:
// In solidity: function createPair(address tokenA, address tokenB) external returns (address pair) {...}
// In Ethers.js ABI: function createPair(address, address) returns (address)
// Essentially all the unique variables are removed as well as "external." By default a function will be
// parsed as an external one. Giving it the view modifier will let Ethers.js know it's a view function. 
const faiAbi = [
  "function INIT_CODE_PAIR_HASH() view returns (bytes32)",
  "function getPair(address, address) view returns (address)",
  "function createPair(address, address) returns (address)",
  "function allPairsLength() view returns (uint)",
  "function setFeeTo(address)",
  "function setFeetoSetter(address)",
  "function allPairs(uint) view returns (address)",
  "function feeTo() view returns (address)",
  "function feeToSetter() view returns (address)"
];

// After defining the contract address, ABI, and converting the functions to Ethers.js you'll want to define
// the contract provider which is defined on lines 10-19 of index.html using the address, ABI, and provider.
const faiContract = new ethers.Contract(faiAddress, faiAbi, provider);
// The signer (person connected through Metamask) is defined using the now-defined contract
const faiWithSigner = faiContract.connect(signer);

// The same thing is repeated with the AthleteXRouter.sol contract. You can load as many different contracts
// as you want in the same ethers.js file depending on how many contracts you need a user to be able to interact
// with on a single page.
const raiAddress = "0x7EFc361e568d0038cfB200dF9d9Be27943e19017";
const raiAbi = [
  "function addLiquidity(address, address, uint, uint, uint, uint, address, uint) returns (uint, uint, uint)",
  "function removeLiquidity(address, address, uint, uint, uint, address, uint) returns (uint, uint)",
  "function swapExactTokensForTokens(uint, uint, address[], address, uint)",
  "function swapTokensForExactTokens(uint, uint, address[], address, uint)"
];
const raiContract = new ethers.Contract(raiAddress, raiAbi, provider);
const raiWithSigner = raiContract.connect(signer);

// The ERC ABI is used in the approve panel that will need to be called by each person to approve the AthleteXRouter
// contract to transfer tokens.
const ercAbi = [
    "function approve(address, uint) returns (bool)"
  ];

// deadlineConst is an example variable that's automatically input in for the deadline for adding liquidity and
// initiating swaps. This deadline is used as a maximum amount of time before the transaction will revert due to
// taking too much time to process. This protection is built into the DEX to protect users from losing out on
// potential profits due to the network taking too long to process their transaction.
const deadlineConst = 1665703737;
// addLiquidityMins is an example variable that's automatically input in for the amounts for functions
// where you define two amounts. This will need to be decided when the UI is completed and you decide which
// parameters you'll have the user input and which will be automatically filled in. For example the minimum
// allowed in some cases could be set to the same amount as the amount desired. 
const addLiquidityMins = 1;

// The outputFunc constants are used to record the returns function outputs in the UI. They're simply for display
// purposes for the test environment and may not be needed for the final product.
const outputFunc = document.querySelector('.outputFunc');
const routerOutputFunc = document.querySelector('.routerOutputFunc');
const approveOutputFunc = document.querySelector('.approveOutputFunc');
const infoOutputFunc = document.querySelector('.infoOutputFunc');

// Coding a function to interact with the blockchain is typically done with an async function. When this function
// is called in the UI whether from a button or automatically, it'll send a call to the blockchain for that specific
// function using the parameters that are passed to it. This first example is for a view function, therefore doesn't
// require a transaction to occur since the blockchain isn't modified.
async function getPair(tokenA, tokenB) {
    // Using an await in the async function will return a promise containing the data needed to pass to the UI
    currentPair = await faiContract.getPair(tokenA, tokenB)
    // Update the UI with the return info
    outputFunc.innerHTML = currentPair;
}

async function getAllPairsLength() {
    currentAllPairsLength = await faiContract.allPairsLength()
    outputFunc.innerHTML = currentAllPairsLength;
}

async function getInitCodePairHash() {
    currentInitCodePairHash = await faiContract.INIT_CODE_PAIR_HASH()
    outputFunc.innerHTML = currentInitCodePairHash;
}

function createPairs(tokenA, tokenB) {
    tx = faiWithSigner.createPair(tokenA, tokenB);
    outputFunc.innerHTML = tx;
}

// With a function that requires sending a transaction you'll use 'tx' followed by the signer and contract that's being called,
// along with the parameters used in the function. Calling this function will open your Metamask with the info belonging to
// the transaction and allowing you to sign and complete the transaction.
// Since transactions are simply defined by the data type that's being passed to it, it's important to ensure the order in which
// you're sending the info to the function matches up with the correct parameter.
function addLiquidity(addLiquidityTokenA, addLiquidityTokenB, addLiquidityAmountADesired, addLiquidityAmountBDesired) {
    currentPair = faiContract.getPair(addLiquidityTokenA, addLiquidityTokenB)
    tx = raiWithSigner.addLiquidity(
        addLiquidityTokenA, 
        addLiquidityTokenB, 
        addLiquidityAmountADesired, 
        addLiquidityAmountBDesired, 
        addLiquidityMins, 
        addLiquidityMins,
        myMetamaskAddress,
        deadlineConst
    );
    routerOutputFunc.innerHTML = tx;
}

function removeLiquidity(addLiquidityTokenA, addLiquidityTokenB, addLiquidityAmountADesired, addLiquidityAmountBDesired, liquidityRemoveAmount) {
    currentPair = faiContract.getPair(addLiquidityTokenA, addLiquidityTokenB)
    tx = raiWithSigner.removeLiquidity(
        addLiquidityTokenA, 
        addLiquidityTokenB, 
        liquidityRemoveAmount, 
        addLiquidityAmountADesired,
        addLiquidityAmountBDesired, 
        myMetamaskAddress,
        deadlineConst
    );
    routerOutputFunc.innerHTML = tx;
}

function swapForExact(amountOut, amountInMax, tokenIn, tokenOut) {
    args = [tokenIn,tokenOut];
    console.log(args);
    tx = raiWithSigner.swapTokensForExactTokens(
        amountOut, 
        amountInMax, 
        args,
        myMetamaskAddress,
        deadlineConst
    );
    routerOutputFunc.innerHTML = tx;
}

function swapExactFor(amountIn, amountOutMin, tokenIn, tokenOut) {
    args = [tokenIn,tokenOut];
    console.log(args);
    tx = raiWithSigner.swapExactTokensForTokens(
        amountIn, 
        amountOutMin, 
        args,
        myMetamaskAddress,
        deadlineConst
    );
    routerOutputFunc.innerHTML = tx;
}

function approveRouter(approveRouterAddress, approveAmount) {
    ercContract = new ethers.Contract(approveRouterAddress, ercAbi, provider);
    ercWithSigner = ercContract.connect(signer);
    tx = ercWithSigner.approve(
        raiAddress, 
        approveAmount
    );
}

function getInfo(swapAddressInfo) {

}