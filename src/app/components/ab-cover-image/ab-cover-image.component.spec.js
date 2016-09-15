(function() {
  'use strict';

  describe('abCoverImage component', function() {

    var $componentController;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ ) {
      $componentController = _$componentController_;
    }));

    it('should have a date defined', function() {
      // Here we are passing actual bindings to the component
      var vm = $componentController('abCoverImage', null, {section: 'home'});
      expect(vm.section).toEqual(jasmine.any(String));
      expect(vm.section).toEqual('home');
      vm = $componentController('abCoverImage', null, {section: 'about'});
      expect(vm.section).toEqual(jasmine.any(String));
      expect(vm.section).toEqual('about');
    });
    
  });
})();

