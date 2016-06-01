var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnserSchema = new mongoose.Schema({
	anser: String,
	details: String,
	username: String,
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	count: { type: Number, default: 0 },
	


});
	
mongoose.model('Anser', AnserSchema);


AnserSchema.path('anser').required(true, 'question cannot be blank');
AnserSchema.path('anser').minlength(8, 'question must be 8 caracters');


	