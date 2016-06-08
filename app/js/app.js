


var myApp = angular.module("myApp", ["ngRoute"]);


   myApp.config(['$routeProvider', function($routeProvider) {
     $routeProvider
		.when("/home", {
			templateUrl: "templates/home.html",
			controller: "homeController"
		})
		.when('/about', {
			templateUrl: "templates/about.html",
			controller: "aboutController"
		})
		.when('/contact', {
			templateUrl: "templates/contact.html",
			controller: "contactController"
		})
		.when('/membership', {
			templateUrl: "templates/membership.html",
			controller: "membershipController"
		})
		.when('/form', {
			templateUrl: "templates/form.html",
			controller: "formController"
		})
		.when('/register', {
			templateUrl: "templates/register/register.html",
			controller: "registerController"
		})
		.when('/membership', {
			templateUrl: "templates/membership.html",
			controller: "membershipController"
		})
		.otherwise({redirectTo:'/home'});
}]);
myApp.controller("homeController", function ($scope) {
	$scope.message = "home";
});
myApp.controller("RegisterController", function ($scope) {

});

myApp.controller('aboutController', function ($scope) {
	$scope.message = "home";
});
myApp.controller('contactController', function ($scope) {
	$scope.message = "home";
});
myApp.controller('homeController', function ($scope) {
	$scope.message = "lessonsController";

});





