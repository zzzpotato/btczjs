/*
config.js - Configuration for ZENCash Coin
*/

module.exports = {
  mainnet: {
messagePrefix: '\x18Zero Signed Message:\n',
  bip32: {
      public: '0x0488b21e',
      private: '0x0488ade4'
   },
    pubKeyHash: '0x1cb8',
    scriptHash: '0x1cbd',
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '0x80'
  },
  testnet: {
    wif: 'ef',
    pubKeyHash: '2098'
  }
};
