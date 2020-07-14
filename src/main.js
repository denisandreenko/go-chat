const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ec04c674dabbe6df28d99516b70b36c3099965eb5ab3764003466389bc3cb12f');
const myWalletAddress = myKey.getPublic('hex');

let customCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
customCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
customCoin.minePendingTransactions(myWalletAddress);

console.log('\nMy balance is ', customCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', customCoin.isChainValid());