// stellar get public account

const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const citizenId = "1231231231235"
const backCard = "asd123456789"
const password = "password"
const temp = citizenId + backCard + password
const seed = StellarSdk.StrKey.encodeEd25519SecretSeed(temp).substring(0,32)
const keyPair = StellarSdk.Keypair.fromRawEd25519Seed(seed);
const secret = keyPair.secret()
const account = keyPair.publicKey()

console.log(account)