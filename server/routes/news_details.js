var express = require('express');
var router = express.Router();
var saveschema = require('../models/newsschema.js');

//localhost:8090/news_details/save
router.post('/save', function(request, response, next){
	var savenews = new saveschema({
		author: request.body.author,
		title: request.body.title,
		description: request.body.description,
		url: request.body.url,
		urlToImage: request.body.urlToImage,
		publishedAt: request.body.publishedAt,
		comment: request.body.comment
	});
	savenews.save(function(err){
		if(err){
			response.send("Not saved");
		}
		else{
			response.send("news is saved successfully");
		}
	})
});
//localhost:8090/news_details/delete
router.delete('/delete', function(request, response){
	newsheading= request.body.title;
	saveschema.remove({"title": newsheading},function(err){
		if(err){
			response.send("Deletion not done");
		}
		else{
			response.send("Deleted");
		}
	});
});

router.get('/view', function(request, response){
	saveschema.find({}, function(err, data){
		if(err){
			response.send("Not able to find");
		}
		else{
			response.send(data);
		}
	});
});

router.put('/update', function(request, response){
	newstitle = request.body.title;
	newcomment = request.body.comment;
	saveschema.update({'title': newstitle},{$set:{'comment': newcomment}});
	response.send("updated"+newstitle+"hjhhj"+newcomment);
	
});


module.exports= router;
