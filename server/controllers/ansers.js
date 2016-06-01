var mongoose = require('mongoose');
var Anser = mongoose.model('Anser');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function(){
	console.log('in ansers controller');
	return {
		show: function(req, res){
			console.log('polls show');
			Anser.find({})
				.populate('_question')
				.exec(function(err, ansers){
					console.log(ansers)
					res.json(ansers);
				})

		},
		update:function(req, res){
				Question.findOne({_id: req.params.id}, function(err, anser){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					anser.anser = req.anser
					anser.details= req.details
					anser.count = req.count +1
					anser.username = req.username
					console.log(poll, 'before save')
					anser.save(function(err, updatedanser){
						if(err){
							console.log(err);
							console.log('saving updated poll');
						} else {
							console.log('success ')
							res.json(updatedanser);
						}
					})
				}
			})
		},
		

		create: function(req, res){
			Question.findOne({_id: req.params.id}, function(err, question){
				console.log( question,' in create anser')
				if(err){
					console.log(err, 'cant find user');
				} else {
					var anser = new Anser(req.body);
					console.log(req, 'this is the anser')
					anser._question = question._id
					anser.save(function(err){
						if(err){
							console.log(err, "here is vallidaton")
						} else{
							question.count += 1
							question.ansers.push(anser);
							question.save(function(err, results){
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