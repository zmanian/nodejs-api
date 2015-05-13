var bitcore = require('bitcore')



// An id key is an cryptographic key registered to a user. Skuchain keys are regular bitcoin key pairs.
// In cryptographic terms they are secp256k1 keys. They can be generated with any tools for generating Bitcoin keys.
// We reccomend Id keys be stored on users client devices and not in any cloud service but
// developers should make appropiate security trade offs for their users. 

// An ID key is considered cryptographic proof that a registered user authorized a transaction in
// the thing chain. A signature might prove that a luxury goods maker manufactured a purse,
// one a grocery store recieved a shipment.


module.exports = {
    generate: function () {
        var privateKey = new bitcore.PrivateKey();
        var publicKey = privateKey.publicKey;
        var outdata = {
          privateKey: privateKey.toWIF(),
          address: publicKey.toAddress().toString()
        };
        return outdata
    }
}
