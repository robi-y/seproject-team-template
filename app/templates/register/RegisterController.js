function RegisterController($scope, $http) {

    $scope.createUser = function () {
        console.log($scope.myForm.$invalid);
        if ($scope.myForm.$invalid) {
            angular.forEach($scope.myForm.$error.required, function (field) {
                field.$setDirty();
            });

            return;
        }
        $http.post('/auth/register', $scope.user)
            .success(function (response) {
                $scope.result = response;
                if (response.isAdded == true) {
                    window.location.reload();
                    window.location.replace('#/index');
                }
                else
                    $scope.result.class = "errMessage";


            })
            .error(function (error) {
                console.log('Error: ' + error);

            });
    }
}
