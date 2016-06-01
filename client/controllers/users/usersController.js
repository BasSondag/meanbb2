myApp.controller('usersController', function($scope, $routeParams, $location, userFactory){
	var id = $routeParams.id;


	$scope.loginUser = function(user) {
		userFactory.readUsers(user, function(data) {
		})
	}

	// userFactory.viewUser(id, function(data) {
	// 	$scope.user = data;
	// })

})

