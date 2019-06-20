const express = require('express');
const fs = require('fs');
function thingHandle(app) {
	const tr = express.Router({
		mergeParams: true
	})

	tr.get('/', (req, res) => {

		req.Model.create({
			name: 'exercise',
			description: 'eeeeeeeeeeeeee'
		}, function (err, doc) {
			console.log(doc)
			if (!err) {

				res.send(doc)
			}
		})

	})



	app.use('/thing/', (req, res, next) => {

		next();
	}, tr);
}


function userHandle(app) {

	const ur = express.Router({
		mergeParams: true
	})

	ur.post('/', (req, res) => {
		res.send('successs......................')
	})
	
	ur.get('/', (req, res) => {
	 
		res.send('successs......................')
	})


	app.use('/user/', (req, res, next) => {

		next();
	}, ur)
}



module.exports = function (app) {


	let models = fs.readdirSync('./models').map(el => {
		return el.slice(0, el.length - 3);

	});

	app.use('/:resource', (req, res, next) => {

		const modelName = require('inflection').classify(req.params.resource);


		if (models.indexOf(modelName) >= 0) {

			req.Model = require(`../models/${modelName}`)
		}
		

		next()
	})

	thingHandle(app);
	userHandle(app)

	app.get('*', function (req, res) {
		res.send('404')
	})

}