const express = require('express')
const router = express.Router()
const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const axios = require('axios')
const bodyParser = require('body-parser')


