const express = require('express');
const mysql = require('mysql')
const createAccount = require('./createAccount');
const path = require('path')
// const indexRouter  = require('./routes/index');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/createAccount',createAccount);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 4000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
