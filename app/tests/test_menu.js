
describe('HomeController', function () {
        
    var $httpBackend;
        
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function($injector) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $injector.get('$controller');
    }));
    

    describe('setMenuItems', function () {
        it('check login controller', inject(function($http){
            var $scope = {};
            var controller = $controller('HomeController', { $scope: $scope });
            $scope.setMenuItems();

            
            expect($scope.items.length).toEqual(5);
            expect($scope.items[1].isVisible).toEqual(true);
            expect($scope.items[2].isVisible).toEqual(false);
        }));
    });
});
