const express = require('express')
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const Router = express.Router();
const util = require('util')

// Input : {}
// Output: { account , secret }

const getBalance = async (account) => (
    await axios.get('/accounts', {
        baseURL: 'https://horizon-testnet.stellar.org',
        params: { addr: account }
    })
    
)


Router.post('/', function (req, res, next) {

    const account = req.body.account
    const url = "/accounts/"+ account   
    const balance = getBalance(url,account)
    console.log(util.inspect(balance,false,null))

    return res.json(
        {
            "status": 200,
            "data": {
                "address": account,
                "balance" : balance
        
            }
        }
    )

})


module.exports = Router;