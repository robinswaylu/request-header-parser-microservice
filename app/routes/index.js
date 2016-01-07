'use strict';

var path = process.cwd();  
var bodyParser = require('body-parser');

module.exports = function (app, passport) {
    
    app.get('/', function (req, res) {
        
        var ip = req.headers['x-forwarded-for'],
        lang = req.headers['accept-language'].split(",")[0],
        software = req.headers['user-agent'].match(/\(([^)]+)\)/),
        whoAmI = {
            ipaddress: ip,
            language: lang,
            software: software[1]
        }
        res.render('index', whoAmI);
  	//	res.json(whoAmI);
	});
};
