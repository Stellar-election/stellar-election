const fs = require('fs');
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const filename = "account.json";

fs.writeFileSync(
    filename,
    JSON.stringify(
        ["alice","bob"].map(name => {
            const key = StellarSdk.Keypair.random();

            return {
                name,
                secret: key.secret(),
                publicKey: key.publicKey()
            };
        })
    )
);



