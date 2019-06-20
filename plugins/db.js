module.exports=app=>{
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://127.0.0.1:27017/thing-to-do',{
		useNewUrlParser:true
	})
	console.log('database start')
}