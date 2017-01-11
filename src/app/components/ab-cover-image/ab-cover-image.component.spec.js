'use strict';
(function() {

  describe('abCoverImage component', function() {

    var $componentController, newScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope) {
      $componentController = _$componentController_;
      newScope = $rootScope.$new();
    }));

    it('should have a date defined', function() {
      // Here we are passing actual bindings to the component
      var vm = $componentController('abCoverImage', {$scope: newScope}, {section: 'home'});
      expect(vm.section).toEqual(jasmine.any(String));
      expect(vm.section).toEqual('home');
      vm = $componentController('abCoverImage', {$scope: newScope}, {section: 'about'});
      expect(vm.section).toEqual(jasmine.any(String));
      expect(vm.section).toEqual('about');
    });

  });
})();

