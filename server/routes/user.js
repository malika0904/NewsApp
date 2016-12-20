var express = require('express');
var router = express.Router();
var loginschema = require('../models/userschema.js');

//localhost:8090/user/register
router.post('/register', function(request, response, next){
	var register = new loginschema({
		fname: request.body.fname,
		lname: request.body.lname,
		email: request.body.email,
		pwd: request.body.pwd
	}); 
	register.save(function(err){
		if(err){
			response.send("Error occurred");
		}
		else{
			response.send("registration done");
		}
	});
});


module.exports = router;