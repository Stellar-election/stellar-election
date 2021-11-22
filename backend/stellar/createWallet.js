const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();

// Input : {}
// Output: { account , secret }


// add fund to wallet to create account
const addFund = async (account) => (
    await axios.get("/friendbot", {
        baseURL: 'https://horizon-testnet.stellar.org',
        params: { addr: account }
    })
)

Router.get('/', function (req, res, next) {

    const keyPair = StellarSdk.Keypair.random();
    const secret = keyPair.secret()
    const account = keyPair.publicKey()
    
    addFund(account)
        .then(()=> console.log('create success'))
        .catch(e => {
        console.log(e);
        throw e;
    });

    return res.json(
        {
            "status": 200,
            "data": {
                "address": account,
                "secret" : secret
        
            }
        }
    )

})

Router.post('/', function (req, res, next) {

    const citizenId = req.body.citizenId
    const backCard = req.body.backCard
    const password = req.body.password
    const temp = citizenId + backCard + password
    const seed = StellarSdk.StrKey.encodeEd25519SecretSeed(temp).substring(0,32)
    const keyPair = StellarSdk.Keypair.fromRawEd25519Seed(seed);
    const secret = keyPair.secret()
    const account = keyPair.publicKey()
    
    addFund(account)
        .then(()=> console.log('create success'))
        .catch(e => {
        console.log(e);
        throw e;
    });

    return res.json(
        {
            "status": 200,
            "data": {
                "address": account,
                "secret" : secret
        
            }
        }
    )

})

module.exports = Router;