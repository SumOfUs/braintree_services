'use strict';

const braintree = require("braintree");
console.log(JSON.stringify(process.env));

const gateway = braintree.connect({
  environment: braintree.Environment[process.env.ENV],
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

const response = (code, body) => {
  return({
    statusCode: code,
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(body || {})
  })
}

module.exports.handler = (event, context, callback) => {
  gateway.clientToken.generate({}, (err, braintree) => {
    if(err){
      callback(null, 500, { error: err.message });
    } else {
      callback(null, response(200, { token: braintree.clientToken }));
    }
  });
};
