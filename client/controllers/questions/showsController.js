myApp.controller('showsController', function($scope, $routeParams, $location, userFactory, questionFactory){
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
	

	questionFactory.showAnsers(id, function(data){
		$scope.ansers = data
	})

	$scope.addCount= function(anser){
		console.log("addCount")
		questionFactory.addCount(anser, function(data){

		})
	}
})


		