const Web3 = require('web3');
const crypto = require('crypto');
const fs = require("fs")
const colors = require("couleurs")

process.on('uncaughtException', function(err) {
  
});

function genandcheck() {
  for (i = 0; i < 10; i++) {
    let privateKey = crypto.randomBytes(32).toString('hex');
    let random = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    if(random == 1){
      let web3 = new Web3("https://eth.llamarpc.com");
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      
        web3.eth.getBalance(account.address).then((balance) => {
          if (balance > 0) {
            console.log(colors("[", [0, 149, 190]) + colors("+1", [0, 255, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
            fs.appendFile('valid.txt', `${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}` + '\n', function(err) {
              if (err) throw err;
            });
          } else {
            console.log(colors("[", [0, 149, 190]) + colors("-1", [255, 0, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
          }
        });

    }
    else if(random == 2){
      let web3 = new Web3("https://rpc.builder0x69.io");
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      
        web3.eth.getBalance(account.address).then((balance) => {
          if (balance > 0) {
            console.log(colors("[", [0, 149, 190]) + colors("+1", [0, 255, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
            fs.appendFile('valid.txt', `${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}` + '\n', function(err) {
              if (err) throw err;
            });
          } else {
            console.log(colors("[", [0, 149, 190]) + colors("-1", [255, 0, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
          }
        });

    }
    else if(random == 3){
      let web3 = new Web3("https://rpc.builder0x69.io");
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      
        web3.eth.getBalance(account.address).then((balance) => {
          if (balance > 0) {
            console.log(colors("[", [0, 149, 190]) + colors("+1", [0, 255, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
            fs.appendFile('valid.txt', `${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}` + '\n', function(err) {
              if (err) throw err;
            });
          } else {
            console.log(colors("[", [0, 149, 190]) + colors("-1", [255, 0, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
          }
        });

    }
    else if(random == 4){
      let web3 = new Web3("https://ethereum.publicnode.com");
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      
        web3.eth.getBalance(account.address).then((balance) => {
          if (balance > 0) {
            console.log(colors("[", [0, 149, 190]) + colors("+1", [0, 255, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
            fs.appendFile('valid.txt', `${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}` + '\n', function(err) {
              if (err) throw err;
            });
          } else {
            console.log(colors("[", [0, 149, 190]) + colors("-1", [255, 0, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
          }
        });

    }
    else if(random == 5){
      let web3 = new Web3("https://rpc.mevblocker.io");
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      
        web3.eth.getBalance(account.address).then((balance) => {
          if (balance > 0) {
            console.log(colors("[", [0, 149, 190]) + colors("+1", [0, 255, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
            fs.appendFile('valid.txt', `${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}` + '\n', function(err) {
              if (err) throw err;
            });
          } else {
            console.log(colors("[", [0, 149, 190]) + colors("-1", [255, 0, 0]) + colors("] ", [0, 149, 190]) + web3.utils.fromWei(balance, 'ether') + ':' + privateKey + ':' + account.address);
          }
        });

    }
  }
}

setInterval(genandcheck, 50);