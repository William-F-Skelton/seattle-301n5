'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function(ctx) {
    console.log(ctx);
    contactView.init();
  }

  module.contactController = contactController;
})(window)
