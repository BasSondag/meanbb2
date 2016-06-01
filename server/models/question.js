var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	ansers: [{type: Schema.Types.ObjectId, ref: 'Anser'}],
	count: { type: Number, default: 0 },
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	


});
	
mongoose.model('Question', QuestionSchema);

QuestionSchema.path('question').required(true, 'question cannot be blank');
QuestionSchema.path('question').minlength(10, 'question must be 10 caracters');


	