'contains('Test')use strict';

module.exports = {
  name: 'ember-cli-stripe-patched',

  contentFor: function(type) {
    if (type === 'body'  && process.env.EMBER_CLI_FASTBOOT !== 'true') {
      return '<script src="https://checkout.stripe.com/checkout.js"></script>';
    }
  },
};
