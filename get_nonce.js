var Web3 = require("web3");
var provider = "http://13.232.77.9:8545";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
async function main() {
  const myAddress = "0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E"; //TODO: replace this address with your own public address

  const nonce = await web3.eth.getTransactionCount(myAddress, "latest");
  console.log(nonce);
}
main();
