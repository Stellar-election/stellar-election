const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const key = StellarSdk.Keypair.random()

const account = server.loadAccount(key.publicKey())

console.log(account)


