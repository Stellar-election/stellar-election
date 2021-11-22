const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const key = StellarSdk.Keypair.random()
const skey = StellarSdk.Keypair.fromSecret('SBZKCAXA3E54H6Z7HTWR6HZZGISIF7L2ODFC2M7YAMNZWNXSHYZM4S6U')

console.log(skey.publicKey())
