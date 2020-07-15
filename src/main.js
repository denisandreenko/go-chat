const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('3d6f54430830d388052865b95c10b4aeb1bbe33c01334cf2cfa8b520062a0ce3');

// Public key (Wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new Blockchain instance
const customCoin = new Blockchain();

// Create a transaction and sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 10);
tx1.signTransaction(myKey);
customCoin.addTransaction(tx1);

// Mine block
customCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 30);
tx2.signTransaction(myKey);
customCoin.addTransaction(tx2);

// Mine block
customCoin.minePendingTransactions(myWalletAddress);

console.log('\nMy balance is ', customCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', customCoin.isChainValid() ? 'Yes' : 'No');
