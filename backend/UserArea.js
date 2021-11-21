const express = require('express')
const router = express.Router()
// const { validation, schema } = require('../validator/users')
const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios')
const bodyParser = require('body-parser')

const filename = "account.json";

// input = เลขบัตร เลขหลังบัตร รหัส.
const db = mysql.createConnection({
    host: "blockchain-do-user-8746931-0.b.db.ondigitalocean.com",
    user: 'doadmin',
    password: 'SkYnAmRfbDe9JrVG',
    database: 'defaultdb'
})



// router.get('/userarea', function(req, res, next) {
//     db.connect((err) =>{
//         if(err){ // กรณีเกิด error
//             console.error('error connecting: ' + err.stack)
//             return
//         }
//         console.log('connected as id ' + db.threadId)
//     })


// }


