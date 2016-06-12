function CourseController($scope, $routeParams, $http) {

    $scope.courses = {};

    $scope.onLoad = onLoad;
    var id = ($routeParams.courseTypeId || "");
    onLoad();

    function onLoad() {
        $http.get('/courses/' + id)
            .success(function (data) {
                $scope.courses = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
			
		$http.get('/Menu/getById/' + id).success( function(response) {
			$scope.parentCourseTypeId = response.parentId;
		});				
    }
}