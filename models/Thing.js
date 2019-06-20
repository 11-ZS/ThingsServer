const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	// user:{
	// 	type:mongoose.SchemaType.ObjectId,ref:'user'
	// },
	name:{
		type:String
	},
	description:{
		type:String
	},
	startTime:{
		type: Date, default: Date.now
	},
	endTime:{
		type:Date
	},
	isOver:{
		type:Boolean
	}
	

})

module.exports= mongoose.model('thing',schema);