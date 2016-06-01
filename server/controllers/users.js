var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	console.log('in controller');
	return {

		

		index: function(req, res){
			
			User.find({}, function(err, results){
				if (err){
					console.log(err);
				} else {
					console.log("in controller index")
					// console.log('here', results);
					res.json(results);
				};
			});
		},

		create: function(req, res){
			console.log('create')
			var user = new User ({name: req.body.name});
			user.save(function(err, results){
				if(err){
					// console.log(err);
				} else{
					console.log("success")
					res.json(results);
				};
			});
		},

		show: function(req, res){
			console.log( req.params.id)
			User.findOne({_id: req.params.id})
				.populate('polls')
				.exec(function(err, result){
					if(err){
						console.log(err);
					} else {
						res.json(result);
					}
				})


			// , function(err, result){
			// 	if(err){
			// 		console.log(err);
			// 		console.log('err');
			// 	} else {
			// 		console.log('succes', result)
			// 		res.json(result);
			// 	}
			// })
		}, 

	}
})()