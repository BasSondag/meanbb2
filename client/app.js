var myApp = angular.module('myApp', ['ngRoute']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'usersController',
				templateUrl: "partials/users/index.html"
			})
			.when('/dashboard',{
				controller: 'dashboardController',
				templateUrl: "partials/questions/dashboard.html"
			})
			.when('/question/:id', {
				controller: 'showsController',
				templateUrl: "partials/questions/show.html"
			})
			.when('/create',{
				controller: 'createsController',
				templateUrl: "partials/questions/create.html"	
			})
			.when('/anser/:id',{
				controller: 'ansersController',
				templateUrl: "partials/ansers/create.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());