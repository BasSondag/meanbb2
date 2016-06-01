myApp.factory('userFactory', function($http, $location){
	var factory = {};
	var thisUser = null;
	var users = []

	factory.readUsers = function(user, callback) {
		var newUser = true;
		$http.get('/users').success(function(data) {
			console.log(data)
			users = data
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}	
			})          	

			if(newUser == true) {	
				console.log("User is new, Creating...");
				$http.post('/users', user).success(function(data) {
					console.log("New user has been created...")
					thisUser = data;
					$location.path('/dashboard');
				})
			}
		})
		callback(thisUser);	
	}

	factory.readUser = function(callback) {
		callback(thisUser);
	}


	 factory.getUsers = function(callback){
	 	console.log(users)
	 	callback(users);
	 }

	factory.viewUser = function(id, callback) {
		$http.get('/users/'+id).success(function(data) {
			console.log(data)
			callback(data);
		})
	}
	return factory    
	
})