const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();

// Input : {coinName , issuer_account , issuer_secret ,account, secret }

const addCoin = (account,coin,issuer,issuer_secret) => {
    server
    .loadAccount(issuer)
    .then(function (issuer) {
        var transaction = new StellarSdk.TransactionBuilder(issuer, {
        fee: 100,
        networkPassphrase: StellarSdk.Networks.TESTNET,
        })
        .addOperation(
            StellarSdk.Operation.payment({
            destination: account,
            asset: coin,
            amount: "1",
            }),
        )
        // setTimeout is required for a transaction
        .setTimeout(100)
        .build();
        transaction.sign(issuer_secret);
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
    const issuer = req.body.issuer
    const issuer_secret = req.body.issuer_secret
    const keyPair = StellarSdk.Keypair.fromSecret(issuer_secret)
    const coin = new StellarSdk.Asset(coinName, issuer);

    addCoin(account,coin,issuer,keyPair)

    return res.json(
        {
            "status": 200,
            
        }
    )

})


module.exports = Router;