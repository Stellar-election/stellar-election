var StellarSdk = require("stellar-sdk");
var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
const accounts = require('./account.json')

// Keys for accounts to issue and receive the new asset
var issuingKeys = StellarSdk.Keypair.fromSecret(
  accounts[0].secret,
);
var receivingKeys = StellarSdk.Keypair.fromSecret(
  accounts[1].secret,
);

// Create an object to represent the new asset
var testCoin = new StellarSdk.Asset("name", issuingKeys.publicKey());

// First, the receiving account must trust the asset
server
  .loadAccount(receivingKeys.publicKey())
  .then(function (receiver) {
    var transaction = new StellarSdk.TransactionBuilder(receiver, {
      fee: 100,
      networkPassphrase: StellarSdk.Networks.TESTNET,
    })
      // The `changeTrust` operation creates (or alters) a trustline
      // The `limit` parameter below is optional
      .addOperation(
        StellarSdk.Operation.changeTrust({
          asset: testCoin,
          
        }),
      )
      // setTimeout is required for a transaction
      .setTimeout(100)
      .build();
    transaction.sign(receivingKeys);
    return server.submitTransaction(transaction);
  })
  .then(console.log)

  // Second, the issuing account actually sends a payment using the asset
  .then(function () {
    return server.loadAccount(issuingKeys.publicKey());
  })
  .then(function (issuer) {
    var transaction = new StellarSdk.TransactionBuilder(issuer, {
      fee: 100,
      networkPassphrase: StellarSdk.Networks.TESTNET,
    })
      .addOperation(
        StellarSdk.Operation.payment({
          destination: receivingKeys.publicKey(),
          asset: testCoin,
          amount: "1",
        }),
      )
      // setTimeout is required for a transaction
      .setTimeout(100)
      .build();
    transaction.sign(issuingKeys);
    return server.submitTransaction(transaction);
  })
  .then(console.log)
  .catch(function (error) {
    console.error("Error!", error);
  });
