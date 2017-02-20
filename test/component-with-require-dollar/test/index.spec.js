'use strict';

var tester = require('../../../');

tester('component with require $', function (expect, sinon) {
  this.testFixtures();

  this.buildComponent(function () {
    this.buildWidget(function () {
      describe('when clicked', function () {
        var $button;

        beforeEach(function () {
          $button = this.widget.$().find('button');

          $button.trigger('click');
          this.widget.update();
        });

        it('should change the button label', function () {
          expect($button.text()).to.equal('$Surprise$');
        });
      });
    });
  });
});
