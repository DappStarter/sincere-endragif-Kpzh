require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note noble smart include arctic surge smoke'; 
let testAccounts = [
"0x71a507ea43c63b47810b9a1f5524a66d5e2d0819beba4df82341972d5c952f92",
"0xb98d0d87107ad8448c38103c429ecdd29f69cd0df84acdd90aa9bd9c1f50551e",
"0xf55a1d6cf18b18bde0b6c0b00cb9f0922650bc0fd89ff520bfb0811bf1890ff9",
"0x3048d190a2c70eed005a86e25aaa7c972316a564c1344a3334da3a5e39f50887",
"0xc96c66085e0147e35e3afb04815a5f6eb81aa7ed0f1a6d49aa13be55f0060ee1",
"0x4b796f1506e858c57a3a94653fedb256f5afef65c5c31981f7c111c6f795f2a9",
"0x6b392a9406c0a476b91ab019127af6fd9ee10680ff696bff6a7ba476237a06ed",
"0xf48786ea80c2884cb0ffe8ea8832b29793fa9ba7d685d51ed42b180ea8ce4281",
"0x7e87aaaf13666126de59758c6136bf2b2135cf5deb775c09f53d47f3b6dcd96a",
"0x358b298c1134754349f8ee5ed3a6ab1bef711c71874a3a44ece0f0cec7481786"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

