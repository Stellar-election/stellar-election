const axios = require('axios')
const accounts = require('./account')

const fund = async accounts => 
    await Promise.all(
        accounts.map(
            async account =>
                await axios.get("/friendbot",{
                    baseURL: 'https://horizon-testnet.stellar.org',
                    params: {addr: account.publicKey }
                })
        )
    );

fund(accounts)
    .then(()=> console.log('ok'))
    .catch(e => {
        console.log(e);
        throw e;
    });