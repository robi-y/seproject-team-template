function MenuController($scope, $routeParams, $http)
{
	var id = ($routeParams.id || 0);
	$scope.showTable = (id == 0);
	
    $http.get('/menu/getMenu/' + id).success( function(response) {
        $scope.menu = response;

		angular.forEach($scope.menu, function (item) {
			item.path = (item.onClick == "" ?  (item.hasChildren ? "#/menu/" : "#/course/") + item.id : "");
			item.image = item.image || "no-image.jpg";
		});
    });
    
    $scope.saveCalls = function(type)
    {
        $http.get('/menu/saveCalls/' + type).success(function (response) {
            alert(response.messages);
        });
    }
    $scope.menuClicked = function (itemOnClick) {
        switch (itemOnClick) {
            case "callWaiter":
                $scope.saveCalls("Waiter");
                break;

            case "callBill":
                $scope.saveCalls("Bill");
                break;
            default:
                break;
        }

    }

}