var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function(){
	console.log('in controller questions');
	return {


		show: function(req, res){
			console.log('polls show');
			Question.find({})
				.populate('_user')
				.exec(function(err, questions){
					console.log(questions)
					res.json(questions);
				})

		},

		question: function(req, res){ 
			Question.findOne({_id: req.params.id}, function(err, ques){
			console.log(ques, "in bend controller")
				if(err){
					console.log(err)
				} else {
					res.json(ques)
				}
			})
		},


	// 	delete: function(req, res){
	// 		Poll.remove({_id: req.params.id}, function(err, poll){
	// 			if(err){
	// 				console.log(err);
	// 				console.log('looks like we have an error in delte Controller');
	// 			} else {
	// 				res.json(poll);
	// 			}
	// 		})
	// 	}, 

		create: function(req, res){
			User.findOne({_id: req.params.id}, function(err, user){
				console.log(user, ' in create')
				if(err){
					console.log(err, 'cant find user');
				} else {
					var question = new Question(req.body);
					console.log(req.body, 'this is the question')
					question._user = user._id;
					question.save(function(err){
						if(err){
							console.log(err, "here is vallidaton")
						} else{
							user.questions.push(question);
							user.save(function(err, results){
								if(err || !results){
									console.log(err , "validtion 1");
								} else {
								
									console.log(results, "save user, question")
									res.json(results)
								}
									
							})
						}
					})
				}
			})
		}
	}
})()