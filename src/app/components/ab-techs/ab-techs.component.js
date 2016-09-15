(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:techs
     *
     * @description
     * Shows cards with the technologies.
     *
     * @param {object}  item      Technology information
     */
  angular
    .module('app')
    .component('abTechs', {
      templateUrl: 'app/components/ab-techs/ab-techs.html',
      controllerAs: 'vm',
      bindings:{
        item: '<'
      }
    });

})();