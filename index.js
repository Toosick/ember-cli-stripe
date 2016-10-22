'use strict';

module.exports = {
  name: 'ember-cli-stripe-patched',
  
  contentFor: function(type) {
    if (type === 'body') {
      return '<script src="https://checkout.stripe.com/checkout.js"></script>';
    }
  },
};
