var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
	ansers: [{type: Schema.Types.ObjectId, ref: 'Anser'}],

});


mongoose.model('User', UserSchema);
