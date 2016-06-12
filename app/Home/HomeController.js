﻿function HomeController($scope, $http) {
    var user;
    $scope.setMenuItems  = function() {
        var isLogged = (user != null);

        $scope.items = [
            { label: "דף הבית", path: "#/HomePage", imageSrc: "", isActive: true, isVisible: true, onClick: "" },
            { label: "התחבר", path: "#/login", imageSrc: "", isActive: false, isVisible: !isLogged, onClick: "" },
            { label: "התנתק", path: "#", imageSrc: "", isActive: false, isVisible: isLogged, onClick: "logout" },
            { label: "מסעדה", path: "#/menu", imageSrc: "", isActive: false, isVisible: true, onClick: "" },
            /*{ label: "סוגי תפריטים", path: "#/courseType", imageSrc: "", isActive: false },
            { label: "תפריט מנות", path: "#/course", imageSrc: "", isActive: false },*/
            { label: "סל הזמנה", path: "#/order", imageSrc: "", isActive: false, isVisible: true, onClick: "" }
        ];
    }
    $http.post('/auth/getuser')
            .success(function (response) {
                user = response.session.user;

                $scope.session = response.session;

                $scope.setMenuItems();

            })
            .error(function (error) {
                console.log('Error: ' + error);

            });


}
