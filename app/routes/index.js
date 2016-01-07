'use strict';

var path = process.cwd(); 
var moment = require('moment');

module.exports = function (app, passport) {
    
    app.get('/', function (req, res) {
  		res.sendFile(path + '/public/index.html');
	});
   
    app.get('/:date', function (req, res) {
  		var answer = {
  			unix: null,
			natural: null
  		}, momentObj;
 
  		//if params is unix or natural. condition(contains only numbers or conatins months)
  		// only number regex ^[0-9]+$
  		//var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  		if(/^[0-9]+$/.test(req.params.date) && req.params.date > 0){ 
  			momentObj = moment.unix(req.params.date);
  			answer.unix = parseInt(req.params.date);
  			answer.natural = momentObj.format('MMMM D, YYYY');
  			res.json(answer);
  		}else if(moment(req.params.date, ['MMMM D YYYY', 'MMMM D, YYYY'], true).isValid()){
  			momentObj = moment(req.params.date);
  			answer.unix = momentObj.unix();
  			answer.natural = momentObj.format('MMMM D, YYYY');
  			res.json(answer);
  		}
  		//else if params.date is not what we want, then we return null
  		else{
  			res.json(answer);
  		} 
	});
};
