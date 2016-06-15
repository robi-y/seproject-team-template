


var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("theropistdataController", ["$scope", "$http", theropistdataController]);



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
		//	controller: "membershipController"
		})
		.when('/form', {
			templateUrl: "templates/form.html",
			controller: "formController"
		})
		.when('/register', {
			templateUrl: "templates/register/register.html",
			controller: "registerController"
		})
		.when('/theropistdata', {
			templateUrl: "templates/theropistdata/theropistdata.html",
			controller: "theropistdataController"
		})
		.when('/patients', {
			templateUrl: "templates/patients.html",
			//template:"<div><h1>this a patients list page</h1></div>",
			controller: "patientsController"
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
myApp.controller('theropistdata', function ($scope) {
	$scope.message = "theropistdata";
})
.service("patientsService",function($http,$q){
	var deferred = $q.defer();
	$http.get('https://api.mlab.com/api/1/databases/speach-theropy/collections/Patient?apiKey=XvABGEjSRBRVhRBHAwKr5XvGS32ARJXw').then(function(data){
		deferred.resolve(data);
	});
	this.getPatients = function(){
		return deferred.promise;
	}
})


.controller('patientsController',function($scope,patientsService){
	var promise = patientsService.getPatients();
	promise.then(function(data){
		
		$scope.patients = data.data;
		console.log("this is my data",$scope.patients);
	});
	
});

.service("patientsService",function($http,$q){
	var deferred = $q.defer();
	$http.post('https://api.mlab.com/api/1/databases/speach-theropy/collections/Patient?apiKey=XvABGEjSRBRVhRBHAwKr5XvGS32ARJXw').then(function(data){
		deferred.resolve(data);
	});
	this.getPatients = function(){
		return deferred.promise;
	}
})
