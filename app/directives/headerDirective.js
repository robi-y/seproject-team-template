/// <reference path="../js/angular.js" />
app.directive('header', function () {
    return {

        restrict: 'E',
        templateUrl: "header.html",
        scope: {
            items: "="
        },
        controller: ["$scope", "$http", function ($scope, $http) {

            $scope.setActive = function (index) {

                angular.forEach($scope.items, function (item) {
                    item.isActive = false;
                });

                $scope.items[index].isActive = true;
            }

            $scope.menuClicked = function (itemOnClick) {
                if (itemOnClick == "logout") {
                    $http.post('/auth/logout')
                        .success(function (response) {
                            window.location.reload();

                        })
                        .error(function (error) {
                            console.log('Error: ' + error);

                        });
                }

            }

        }]
    }
});