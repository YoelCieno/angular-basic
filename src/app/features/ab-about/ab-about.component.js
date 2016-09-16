(function() {
  'use strict';
  /**
     * @ngdoc component
     * @name app.component:abAbout
     *
     * @description
     * Feature about. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('abAbout', {
      templateUrl: 'app/features/ab-about/ab-about.html',
      controller: AboutController,
      controllerAs: 'vm'
    });

    /** @ngInject */
    function AboutController(navbarPaths, guideItems, toastr, creation) {
      var vm = this;
      vm.pageData = {
        section: 'about',
        sectionText: 'About Section',
        creationDate: creation.getDate(),
        contentType: 'guide-item',
        contentData: guideItems.getItems(),
        logoURL: 'assets/images/serenity/serenity.png',
        brand: 'Angular Basic',
        paths: navbarPaths.getPaths()
      };
    }
  
})();