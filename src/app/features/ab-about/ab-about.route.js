(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        template: '<ab-about></ab-about>'
      });
  }

})();
