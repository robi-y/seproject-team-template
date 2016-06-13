describe('CourseController', function () {

    beforeEach(module('myApp'));
    var $scope = {};
    var $controller;

    beforeEach(inject(function($injector) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $injector.get('$controller');
    }));


    describe('course', function () {
        var mockCourseTypeId = 1;
        it('check get courses by type', inject(function($http){
            var controller = $controller('CourseController', { $scope: $scope, $routeParams: {courseTypeId: mockCourseTypeId}, $http: $http });
            $scope.courses = {};
            $scope.onLoad();

            angular.forEach($scope.courses, function(value) {
                expect(value.courseTypeId).toEqual(mockCourseTypeId);
            });

        }));
    });
});
