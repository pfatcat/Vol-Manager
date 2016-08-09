'use strict';

const requireDir = require('require-dir');
const controllers = requireDir("./controllers");

let routes = [

	//http://localhost:8000/getAllVols
	{
		method: 'GET',
		path:'/getAllVols', 
		handler: controllers.players.getAllVols
	},

	//http://localhost:8000/getAVol
	//{"volId": 5}
	{
		method: 'POST',
		path:'/getAVol', 
		handler: controllers.players.getAVol
	}

];

module.exports = routes;