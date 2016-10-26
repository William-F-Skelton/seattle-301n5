(function(ctx) {
  const homeController = {};

  homeController.init = function() {
    homeView.init();
  }

  homeController.error = function() {
    homeView.error();
  }

  ctx.homeController = homeController;
})(window)
