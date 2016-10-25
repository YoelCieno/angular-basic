(function() {
  'use strict';

  describe('guideItem component', function() {

    var $componentController;
    var guideItems;
    var item;
    var bindings;
    var newScope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$componentController_ , _guideItems_, $rootScope) {
        $componentController = _$componentController_;
        //Getting data from the service
        guideItems = _guideItems_; 
        var itemList = guideItems.getItems();
        item = itemList[0];
        //Defining the binding for the component data
        bindings = {item: item};
        //New scope
        newScope = $rootScope.$new();
    }));
      
    it('shouldnt have a Item like functionality by default ', function() {
        // Here we are passing actual bindings to the component
        var vm = $componentController('abGuideItem', {$scope: newScope}, bindings);
        expect(vm.item.like).toEqual(false);
    });

    it('should have a Item like functionality ', function() {
        // Here we are passing actual bindings to the component
        var vm = $componentController('abGuideItem', {$scope: newScope}, bindings);
        vm.setItemLike(vm.item);
        expect(vm.item.like).toEqual(true);
        vm.setItemLike(vm.item);
        expect(vm.item.like).toEqual(false);
    });
    
  });
})();
