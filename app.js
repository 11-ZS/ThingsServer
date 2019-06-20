const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json());

require('./route/index.js')(app);
require('./plugins/db.js')(app);


app.listen(3000,()=>{
	console.log('ThingsServer Start')
	console.log('port 3000')
})