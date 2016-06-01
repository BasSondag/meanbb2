myApp.controller('createsController', function($scope, $routeParams, $location, userFactory, questionFactory){
	var currentUser = null
	$scope.lists = {}
	userFactory.readUser(function(data){
		currentUser = data;
		$scope.currentUser = data;
	});

	$scope.addQuestion = function(newQuestion){
		console.log('adQue')
		questionFactory.addQuestion(newQuestion, currentUser, function(data){
			console.log(data, "in addQuestion controller")
			newQuestion= {}
		})
	}

})