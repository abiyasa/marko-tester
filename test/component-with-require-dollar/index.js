'use strict';

var generateLabel = require('./generateLabel');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  updateLabel: function () {
    var buttonLabel = this.$('button').text();
    this.$('button').text(generateLabel(buttonLabel));
  }
});
