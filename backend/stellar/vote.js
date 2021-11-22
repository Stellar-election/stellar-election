const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();

// Input : {coinName , destination , account , secret , issuer}


Router.post('/', function (req, res, next) {

    const coinName = req.body.coinName
    const account = req.body.account
    const secret = req.body.secret
    const destination = req.body.destination
    const issuer = req.body.issuer

    const coin = StellarSdk.Asset(coinName, issuer);

    server
    .loadAccount(account)
    .then(function (sender) {
        var transaction = new StellarSdk.TransactionBuilder(sender, {
        fee: 100,
        networkPassphrase: StellarSdk.Networks.TESTNET,
        })
        .addOperation(
            StellarSdk.Operation.payment({
            destination: destination,
            asset: coin,
            amount: "1",
            }),
        )
        // setTimeout is required for a transaction
        .setTimeout(100)
        .build();
        transaction.sign(issuer_secret);
        server.submitTransaction(transaction);
    })
    .then(console.log)
    .catch(function (error) {
        console.error("Error!", error);
    });

    return res.json(
        {
            "status": 200,
            "data" : log
            
        }
    )

})


module.exports = Router;