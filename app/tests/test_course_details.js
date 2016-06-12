describe('CourseDetailsController', function () {

    beforeEach(module('myApp'));

    var $controller;
    var $scope = {};

    beforeEach(inject(function($injector) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $injector.get('$controller');
    }));


    describe('course_details', function () {
        console.log("11");
        var mockCourseId = -1;
        it('check get course details empty', inject(function($http){
            var controller = $controller('CourseDetailsController', { $scope: $scope, $routeParams:  {courseId: mockCourseId}, $http: $http });
            $scope.courseId = mockCourseId;
            $scope.course = {};
            $scope.onLoad();

            expect($scope.course.length).toEqual(0);
        }));
    });


    describe('order success', function () {
        var mockCourseId = 1;
        it('should call http.post', inject(function($http){
            var $scope = {amount: 0};
            var controller = $controller('CourseDetailsController', { $scope: $scope, $routeParams: {courseId: mockCourseId}, $http: $http });

            $httpBackend
                .when('POST', '/order/addOrderItem')
                .respond(200, { isOrdered: true });

            $httpBackend.flush();

            $scope.orderCourse();
            expect($httpBackend).toHaveBeenCalled();
            expect($scope.response).toEqual({ isOrdered: true });
        }));
    });

    describe('order failed', function () {
        var mockCourseId = 0;
        it('should call http.post', inject(function($http){
            var $scope = {amount: 1};
            var controller = $controller('CourseDetailsController', { $scope: $scope, $routeParams: {courseId: mockCourseId}, $http: $http });

            $httpBackend
                .when('POST', '/order/addOrderItem')
                .respond(200, { isOrdered: true });

            $httpBackend.flush();

            $scope.orderCourse();
            !expect($httpBackend).toHaveBeenCalled();
        }));
    });
});
