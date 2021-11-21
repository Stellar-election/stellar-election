const StellarSdk = require('stellar-sdk');
const accounts = require('./account');
const util = require('util')
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const checkAccounts = async accounts => {
    const sAccounts = await Promise.all(
        accounts.map(
            async account => await server.loadAccount(account.publicKey)
        )  
    );
    return sAccounts.map(({id,balances}) =>({
            id,
            balances
        })
    )
}

checkAccounts(accounts).then(accounts => console.log(util.inspect(accounts,false,null))).catch(e => {
    console.log(e);
    throw e;
});