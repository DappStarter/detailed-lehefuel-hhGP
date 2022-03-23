require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember million half clinic outer sketch'; 
let testAccounts = [
"0xfeddbf56f769cdb00b9d749794721e0485ea2b80e687e08d5445525e977963dc",
"0xa18c5ea6a59826fc0d04e0cbb31b7b2e30563760ab10e5bfaf9976dcf40bfb01",
"0x48cc830c5edc0f36ae7ff4ea892edbb2054a19e18747800efad40f93ed50b854",
"0x7f84d3885382c05ae1c08ca2d5b9d5fb8c45ab7aaf742b02e3e0338cb3e328ee",
"0x0127a088b8a67559871217e7c36465fe8af2f2194ac869ecf0b4c52d0bb3bed6",
"0x1a52951eb4128c89ef9c88fc9d3cbbdd2426895d23171b1cba5fa35394a333ca",
"0xcb61c704c522aafb30a6be3c1ffa86aab44c61afafed936779f4ef3d575a9969",
"0x2cb7ef5c1c9c1a57a6a04785ed4a8e19e37fd0c347710eb4c020275b59f40fc9",
"0x5e7dcf65723eefe26b5f6990a2468328af26f3af80f0e5c2fbd3bf860bba3c13",
"0x8e4520406ddf6e8b2b5861a95744dfe4ae2006b7cbc6667f42014ceadce6dc8c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

