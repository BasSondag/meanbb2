myApp.controller('dashboardController', function($scope, $routeParams, $location, userFactory, questionFactory){
	var currentUser = null
	$scope.lists = {}
	userFactory.readUser(function(data){
		console.log('here')
		currentUser = data;
		$scope.currentUser = data;
	});

	questionFactory.getQuestions(currentUser ,function(data){
		console.log(data, 'controller get list')
		$scope.questions = data
	})	
	
	// $scope.removeQuestion = function(poll){
	// 	console.log(poll , 'gonna move Q')
	// 	pollFactory.removeQuestion(poll, function(data){
	// 		console.log(data, "is removed controller")
		
	// 	})
	// }	
	
});