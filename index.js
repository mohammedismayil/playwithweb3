const url =
  "https://eth-rinkeby.alchemyapi.io/v2/VleCJ-KYRed78DQkDlKJ_KetBODadpkS";
Web3 = require("web3");
// Using web3js
const web3 = new Web3(url);

// Using ethers.js
// const provider = new ethers.providers.JsonRpcProvider(url);

const tx =
  "f8630784d693a40082697894c37054b3b48c3317082e7ba872d7753d13da498680802ca0e00109280835eb17edcddb3a1ebe1e226e4fab62a4ca9c9f02abef8f11ccca5ea002d65b336053c13fd78df1893c696a60eca927b1889df760800f62a80b8b26be";
const serializedTx = `0x${tx.toString("hex")}`;

// web3.eth.sendSignedTransaction(serializedTx);
const hash = new Promise(async (resolve) => {
  await web3.eth
    .sendSignedTransaction(serializedTx)
    .once("transactionHash", (hash) => {
      resolve(hash);
    });
  console.log("We've finished");
});
console.log("Hash: ", hash);
// web3.eth
//   .getTransactionCount("0x66D2769bA22e8cdfD1B31BCA09fFfEe4DFF260a3")
//   .then(console.log);
