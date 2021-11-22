const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();

// Input : {coinName , destination , account , secret , issuer}

const vote = (account,secret,coin,destination) => {
    server
    .loadAccount(account)
    .then(function (voter) {
        var transaction = new StellarSdk.TransactionBuilder(voter, {
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
        .addOperation(
            StellarSdk.Operation.changeTrust({
            asset: coin,
            limit: "0",
            
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
    const destination = req.body.destination
    const issuer = req.body.issuer
    const keyPair = StellarSdk.Keypair.fromSecret(secret)

    const coin = new StellarSdk.Asset(coinName, issuer);

    vote(account,keyPair,coin,destination)

    return res.json(
        {
            "status": 200,
        }
    )

})


module.exports = Router;