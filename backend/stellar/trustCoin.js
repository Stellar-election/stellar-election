const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();

// Input : {coinName , account , secret , issuer_account}

const trustCoin = (account, coin, secret) =>{
    server
    .loadAccount(account)
    .then(function (receiver) {
        var transaction = new StellarSdk.TransactionBuilder(receiver, {
        fee: 100,
        networkPassphrase: StellarSdk.Networks.TESTNET,
        })
        .addOperation(
            StellarSdk.Operation.changeTrust({
            asset: coin,
           
            }),
        )
        .setTimeout(100)
        .build();
        transaction.sign(secret);
        return server.submitTransaction(transaction);
    })
    .then(console.log)
    .catch(function (error) {
        console.error("Error!", error);
    });
}

Router.post('/', function (req, res, next) {

    const coinName = req.body.coinName
    const account = req.body.account
    const secret = req.body.secret
    const issuer = req.body.issuer
    const keyPair = StellarSdk.Keypair.fromSecret(secret)
    const coin = new StellarSdk.Asset(coinName, issuer);

    trustCoin(account,coin,keyPair)

    return res.json(
        {
            "status": 200,
            
        }
    )

})


module.exports = Router;