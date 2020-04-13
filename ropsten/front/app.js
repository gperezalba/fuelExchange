const contractABI = [{"constant":true,"inputs":[],"name":"active","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"brokeByPart","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_part","type":"address"}],"name":"_getCounterpart","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"partB","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getTokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"tokenFallback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"finishByPart","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"partA","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"brokeDeal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishDeal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"activeByPart","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_partA","type":"address"},{"name":"_partB","type":"address"},{"name":"_tether","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TetherTransfer","type":"event"}];
const contractADDRESS = "0x0588Df91dCE9824198Fb56B28085287c357e19Ba";
const tetherABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
const tetherADDRESS = "0x6943e925FD4e9e243230DA2e26056b9C8A9cd8CE";

const AMOUNT = "1000000";

const App = {
    web3: null,
    account: null,
	contract: null,
	tether: null,

    start: async function(web3) {
        this.web3 = web3;

        try {
			this.contract = new this.web3.eth.Contract(contractABI, contractADDRESS);
			this.tether = new this.web3.eth.Contract(tetherABI, tetherADDRESS);

            const accounts = await this.web3.eth.getAccounts();
            this.account = accounts[0];

        } catch (error) {
            console.error("Could not connect to contract or chain.");
        }
	},

	updateInfo: async function() {
		let netId = await this.web3.eth.net.getId();
		console.log(netId);
		let netName;

		if (netId == 1) {
			netName = "Está conectado a: Ethereum Mainnet";
		} else {
			netName = "Está conectado a: TestNet";
			alert("Debe conectar Metamask a Ethereum Mainnet y recargar la página");
		}

		document.getElementById("personalInfo").innerHTML = netName +
			" <br> Su wallet es: " +
			this.account;

		let info = await this.contract.methods.getInfo().call();

		let actA;
		let actB;
		let finA;
		let finB;
		let brkA;
		let brkB;

		if (info[3]) {
			actA = "HECHO"
		} else {
			actA = "pendiente..."
		}

		if (info[4]) {
			actB = "HECHO"
		} else {
			actB = "pendiente..."
		}

		if (info[5]) {
			finA = "HECHO"
		} else {
			finA = "pendiente..."
		}

		if (info[6]) {
			finB = "HECHO"
		} else {
			finB = "pendiente..."
		}

		if (info[7]) {
			brkA = "HECHO"
		} else {
			brkA = "pendiente..."
		}

		if (info[8]) {
			brkB = "HECHO"
		} else {
			brkB = "pendiente..."
		}

		document.getElementById("info").innerHTML = "Saldo smart contract (USDT): " + 
			info[0]/(1e6) +
			" <br> Parte A (wallet): " +
			info[1] +
			" <br> Parte B (wallet): " +
			info[2] +
			" <br>  <br> Activación de contrato (Parte A): " +
			actA +
			" <br> Activación de contrato (Parte B): " +
			actB +
			" <br>  <br> Finalizar intercambio (Parte A): " +
			finA +
			" <br> Finalizar intercambio (Parte B): " +
			finB +
			" <br>  <br> Cancelar intercambio (Parte A): " +
			brkA +
			" <br> Cancelar intercambio (Parte B): " +
			brkB;

		let txHash = await this.getTransfer();
		document.getElementById("etherscanurl").href = "https://ropsten.etherscan.io/tx/" + txHash;

		let partA = await this.contract.methods.partA().call();
		let allowed = await this.tether.methods.allowance(partA, contractADDRESS).call();
		document.getElementById("allowed").innerHTML = "El Smart Contract tiene aprobado el cobro de: " + allowed/1e6 + " USDT";
	},

	approve: async function() {
		let txHash = await this.tether.methods.approve(contractADDRESS, AMOUNT).send({from: this.account, gas: 100000});
		console.log(txHash.transactionHash)
		this.updateInfo();
	},

	transferFrom: async function() {
		let partA = await this.contract.methods.partA().call();
		let allowed = await this.tether.methods.allowance(partA, contractADDRESS).call();

		if (allowed == AMOUNT) {
			let txHash = await this.contract.methods.transferFrom(AMOUNT).send({from: this.account, gas: 100000});
			console.log(txHash.transactionHash);
			this.updateInfo();
		} else {
			alert("No se ha aprobado el pago de la cantidad correcta")
		}
	},
	
	activate: async function() {
		let txHash = await this.contract.methods.activate().send({from: this.account, gas: 100000});
		console.log(txHash.transactionHash)
		this.updateInfo();
	},

	finishDeal: async function() {
		let txHash = await this.contract.methods.finishDeal().send({from: this.account, gas: 100000});
		console.log(txHash.transactionHash)
		this.updateInfo();
	},

	brokeDeal: async function() {
		let txHash = await this.contract.methods.brokeDeal().send({from: this.account, gas: 100000});
		console.log(txHash.transactionHash)
		this.updateInfo();
	},

	getTransfer: async function() {
		let ev = await this.tether.getPastEvents("Transfer", {
			filter: {to: contractADDRESS},
			fromBlock: 0,
			toBlock: "latest"
		});

		if (ev.length == 0) {
			return "";
		} else {
			return ev[0].transactionHash;
		}
	}
}    

window.App = App;

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts= await web3.eth.getAccounts();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    console.log(web3.version);
	App.start(window.web3);
	App.updateInfo();
});