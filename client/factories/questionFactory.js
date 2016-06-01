myApp.factory('questionFactory', function($http, $location   ){
	var factory= {};

	factory.getQuestions = function(currentUser, callback){
		$http.get('/questions').success(function(data){
			console.log(data, "factory get list")
			callback(data)
		})
	}

	factory.showAnsers = function(id , callback){
		$http.get('/ansers/'+ id).success(function(data){
			callback(data)
		})
	}

	factory.addQuestion = function(newQuestion, currentUser, callback){
		console.log(currentUser, 'factory')
		$http.post('/questions/'+ currentUser._id,  newQuestion).success(function(data){
			$location.path('/dashboard');

		})
	}

	factory.addAnser = function(newAnser, currentQuestion, callback){
		console.log(currentQuestion, 'factory')
		$http.post('/ansers/'+ currentQuestion,  newAnser).success(function(data){
			$location.path('/dashboard');

		})
	}

	factory.showQuestion = function(id, callback){
		console.log(id , 'id  factory')
		$http.get('questions/' + id).success(function(data){
			console.log(data, "ques in facto")
			callback(data)
		})
	}

	factory.addCount = function(anser, callback){

		$http.post('anser1/' + anser._id, anser).success(function(data){
			anser.count1 += 1
			console.log(poll)
			callback(data)
		})

	}
	
	// factory.removeQuestion = function(poll, callback){
	// 	$http.delete('poll/'+ poll._id)

	// }




	return factory;
})
