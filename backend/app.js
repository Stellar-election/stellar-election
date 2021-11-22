const express = require('express');
const mysql = require('mysql')
// const createAccount = require('./createAccount');
const addCoin = require('./stellar/addCoin');
const createWallet = require('./stellar/createWallet');
const checkBalance = require('./stellar/checkBalance');
const trustCoin = require('./stellar/trustCoin');
const vote = require('./stellar/vote');
const path = require('path')
const trustCoinWithLimit = require('./stellar/trustCoinWithLimit')
// const indexRouter  = require('./routes/index');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/createAccount',createAccount);
app.use('/addCoin',addCoin);
app.use('/createWallet',createWallet);
app.use('/checkBalance',checkBalance);
app.use('/trustCoin',trustCoin);
app.use('/vote',vote);
app.use('/trustCoinWithLimit',trustCoinWithLimit)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 4000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
