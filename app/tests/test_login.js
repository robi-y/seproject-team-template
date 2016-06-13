
describe('LoginController', function () {

        
    var $httpBackend;
        
    beforeEach(module('myApp'));
    var $scope = {};

    /*beforeEach(angular.mock.inject(function($rootScope, $httpBackend, LoginController ) {
        $scope = $rootScope;
        mockHttpBackend = $httpBackend;
        controller = LoginController;
    }));*/
    var $controller;

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $injector.get('$controller');
    }));
    

    describe('$scope.login', function () {
        var mockUser = { userName: "miriyak", password: "1234" };
        it('check login controller', inject(function($http){
            var controller = $controller('LoginController', { $scope: $scope, $http: $http });
            $scope.user = mockUser;
            $scope.myForm = {};
            $scope.myForm.$invalid = false;
            $scope.login();
            
            $httpBackend
            .when('POST', '/auth/login')
            .respond(200, { isLogged: true, message: "כניסה בוצעה בהצלחה", user: mockUser });
            console.log($scope.result.class);
            
            $httpBackend.flush();
            

            expect($scope.result.isLogged).toEqual(true);
        }));
    });
});
