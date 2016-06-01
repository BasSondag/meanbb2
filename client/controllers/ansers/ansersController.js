myApp.controller('ansersController', function($scope, $routeParams, $location, userFactory, questionFactory){
	$scope.question= {}
	var id = $routeParams.id;
	var currentUser = null
	var currentQuestion = null
	userFactory.readUser(function(data){
		currentUser = data;
		$scope.currentUser = data; 			
	});



	questionFactory.showQuestion(id, function(data){
		console.log('here with id ', id)
		console.log(data)
		currentQuestion = data._id
		$scope.question = data
	})


	$scope.addAnser = function(newAnser){
		console.log(currentUser,"loking name")
		newAnser.username = currentUser.name
		console.log('adAns')
		questionFactory.addAnser(newAnser, currentQuestion, function(data){
			console.log(currentQuestion)
			console.log(data, "in addAnswer   controller")
			$scope.newAnser= {}
		})
	}

})