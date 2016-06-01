var userscontroller = require('./../controllers/users.js');
var questionscontroller = require('./../controllers/questions.js');
var anserscontroller = require('./../controllers/ansers.js');
module.exports = function(app){

	app.get('/users', function(req,res){
		console.log("in get route");
		userscontroller.index(req, res);
	});


	app.post('/users',function(req,res){
		console.log("in add route")
		userscontroller.create(req, res);
	});

	app.post('/questions/:id', function(req, res){
		questionscontroller.create(req, res);
	});

	app.get('/users/:id', function(req,res){
		conole.log("in the correct route")
		userscontroller.show(req, res)
	});

	app.get('/questions', function(req, res){
		questionscontroller.show(req, res)
	})

	app.post('/ansers/:id', function(req, res){
		anserscontroller.create(req, res)
	})

	app.get('/questions/:id', function(req, res){
		questionscontroller.question(req, res)
	})

	app.get('/ansers/:id', function(req, res){
		anserscontroller.show(req, res)
	})
	app.post('/anser1/:id', function(req, res){
		anserscontroller.update(req, res)
	})
}