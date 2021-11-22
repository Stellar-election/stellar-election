const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();
const util = require('util')

// Input : {}
// Output: { account , secret }

const getBalance = async (account) => {
    const sAccount = await server.loadAccount(account);
    const balance = parseInt(sAccount.balances[0]["balance"])
    return balance;
}

Router.post('/', async (req, res, next) => {
    const account = req.body.account
    const balance = await getBalance(account)

    return res.json(
        {
            "status": 200,
            "data": {
                "address": account,
                "result": balance
            }
        }
    )
})

module.exports = Router;
