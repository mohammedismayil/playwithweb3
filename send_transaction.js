const url =
  "https://eth-rinkeby.alchemyapi.io/v2/VleCJ-KYRed78DQkDlKJ_KetBODadpkS";
Web3 = require("web3");
// Using web3js
const web3 = new Web3(url);
async function main() {
  const myAddress = "0x66D2769bA22e8cdfD1B31BCA09fFfEe4DFF260a3"; //TODO: replace this address with your own public address

  const nonce = await web3.eth.getTransactionCount(myAddress, "latest"); // nonce starts counting from 0

  const PRIVATE_KEY =
    "fb3bd8432ecfa80acd9a57187d48b08f68a502ee7e8cab2f7a33f6c408d6f5ae";

  const transaction = {
    to: "0xC37054b3b48C3317082E7ba872d7753D13da4986", // faucet address to return eth
    value: 100,
    gas: 30000,
    maxFeePerGas: 2500000000,
    nonce: nonce,
    // optional data field to send message or execute smart contract
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    transaction,
    PRIVATE_KEY
  );

  web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      if (!error) {
        console.log(
          "🎉 The hash of your transaction is: ",
          hash,
          "\n Check Alchemy's Mempool to view the status of your transaction!"
        );
      } else {
        console.log(
          "❗Something went wrong while submitting your transaction:",
          error
        );
      }
    }
  );
}
main();
