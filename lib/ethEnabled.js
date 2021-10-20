const Web3 = require("web3");

async function ethEnabled() {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        startApp(web3);
        return true;
    } return false;
}

ethEnabled();
