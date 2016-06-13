function OrderController($scope, $http)
{
    $scope.courses = [];
	$scope.noItems = false;
	$scope.total = 0;
	
    $http.get('/order/viewOrder')
        .success(function(data) {
            if (data) {
				$scope.courses = data;
				$scope.noItems = true;

				angular.forEach($scope.courses, function (item) {
                    $scope.total += item.price * (item.amount || 1);
					$scope.noItems = false;
                });
			}
            console.log(data);
        })
        .error(function(err) {
            console.log('Error: ' + err);
			$scope.noItems = true;
        });
}