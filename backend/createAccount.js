// import { route } from './routes';

// const route = require('./routes')
const express = require('express')
const router = express.Router()
// const { validation, schema } = require('../validator/users')
const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const Router = express.Router();
console.log("before connect=============================================")
// input = เลขบัตร เลขหลังบัตร รหัส.
const db = mysql.createConnection({
    host: "blockchain-do-user-8746931-0.b.db.ondigitalocean.com",
    user: 'doadmin',
    password: 'SkYnAmRfbDe9JrVG',
    database: 'defaultdb',
    sslmode: "REQUIRED",
    port: 25060 
})

db.connect((err) => {
    if (err) { // กรณีเกิด error
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + db.threadId)
})
Router.get('/account', () => res.send("HERE!!!!"))

Router.post('/account', function (req, res, next) {
    // do something
    console.log("post===========================================================")
    const fullname = req.body.fullname
    const citizenId = req.body.citizenId
    const backCard = req.body.backCard
    const password = req.body.password

    const temp = citizenId + backCard + password + citizenId + backCard + password
    const secret = temp.substring(0, 56);
    console.log(`secret -> ${secret}`);
    const pairKey = StellarSdk.Keypair.random();
    const issuingKeys = StellarSdk.Keypair.random();
    

    fund(pairKey);

    let text = "Hello world!";
    let sql = `INSERT INTO USER VALUES (' ${fullname},${citizenId},${backCard} ,${password}');`
    // let sql2 = `SELECT  id,area_id,area ,area_use  FROM USER_AREA where citizenId = ? `,citizenId     // area_use default เป็น 0  ใช้เสร็จเป็น 1 

    db.query(sql, (error, results) => {
        if (error) return res.status(500).json({
            "status": 500,
            "message": "Internal Server Error" // error.sqlMessage
        })
        console.log("query")

    })
    
    // db.query(sql2, (error, results)=>{
    //     if(error) return res.status(500).json({
    //         "status": 500,
    //         "message": "Internal Server Error" // error.sqlMessage
    //     })
    //     var id = results[0].id
    //     var area = results[0].area
    //     var area_id = results[0].area_id                         
    //     var area_use = results[0].area_use


    // })

    
    const coinArea = new StellarSdk.Asset(area, issuingKeys.publicKey());

    server
        .loadAccount(pairKey.publicKey())
        .then(function (receiver) {
            var transaction = new StellarSdk.TransactionBuilder(receiver, {
                fee: 100,
                networkPassphrase: StellarSdk.Networks.TESTNET,
            })
                .addOperation(
                    StellarSdk.Operation.changeTrust({
                        asset: coinArea,

                    }),
                )
                // setTimeout is required for a transaction
                .setTimeout(100)
                .build();
            transaction.sign(pairKey);
            return server.submitTransaction(transaction);
        })
        .then(console.log)

    return res.json(
        {
            "status": 200,
            "data": {
                "address": pairKey.publicKey(),
                // "area" : area,
                // "province" :  province,
                // "area_use" : area_use,
                // "province_use" :  province_use,

            }
        }
    )

})

// create wallet
const fund = async (pairKey) => (
    await axios.get("/friendbot", {
        baseURL: 'https://horizon-testnet.stellar.org',
        params: { addr: pairKey.publicKey() }
    })
)

module.exports = Router;

// fund(accounts)
//     .then(()=> console.log('ok'))
//     .catch(e => {
//         console.log(e);
//         throw e;
//     });

// SBZKCAXA3E54H6Z7HTWR6HZZGISIF7L2ODFC2M7YAMNZWNXSHYZM4S6U
// 56