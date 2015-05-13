request = require('request')


// A popcode is a cryptographic key associated with a "thing". A box of wine, car , a collector's item.
// Popcodes are generated through a secure key derivation function on the server by the thingchain server.
// There are several advantages to using the key derivation function we provide. The most important is that disperate users
// will be the ability to operate over a set of popcodes in bulk only from a set of sequence numbers.

// The derive popcode will allow users to take advantage of pregenerate popcodes that you can order 
// from thingchain.

// We have carefully thought through the security consequences of this architecture. The design of
// thingchain will include a very careful securing the generation of the cryptographic secrets that secure the 
// generation of popcodes including hardware security modules

// Future versions of the API will permit users to have the private popcode key be controled solely within 
// the application if so desired.


module.exports = function (numPopcodes, batchId, seqat, userId, cb) {
  request({
    method: "POST",
    url: _thingchain.apiStub + "/popcode/derive",
    json: true,
    body: {
      "numPopcodes": numPopcodes,
      "batchId": batchId,
      "seqat": seqat,
      "userId": userId,
      "apiKey": _thingchain.apiKey
    }
    }, function (e, r, body) {
      cb(null, body)
    }
  )
}
