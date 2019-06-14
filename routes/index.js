var express = require('express');
var router = express.Router();
var moment = require('moment');
var monk=require('monk');
var db = monk('localhost:27017/project'); 
var collection = db.get('guestdetails'); 
var collection1=db.get('orderlist');
var login=db.get('login');
/* GET home page. */

router.get('/', function(req, res) { 
	if(req.session&&req.session.user){
		res.locals.user=req.session.user;
        res.redirect('/index');
    }
    else{
    	req.session.reset();
    	res.render('login');
    }

});

router.get('/index',function(req,res){
	if(req.session&&req.session.user){
		res.locals.user=req.session.user;
	    collection1.find({},function(err,docs){
	    	console.log(docs);
	    	res.locals.data=docs;
	    res.render('index');
        });
	}
	else{
		res.redirect('/');
	}
});
router.get('/download',function(req,res){
	res.render('index');
});
router.post('/download',function(req,res){
	var id=req.body.no;
	collection1.find({"_id":id},function(err,docs){
		console.log(docs);
		res.send(docs);
		
	});
});

function gettimestamp(currentdate,temp)
{
  var timestamp=currentdate+" "+temp;
      dateTimeParts=timestamp.split(' '),
      timeParts=dateTimeParts[1].split(':'),
      dateParts=dateTimeParts[0].split('-');
var date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
return date.getTime();
}
router.post('/report',function(req,res){
	//console.log(req.body.from);
	//console.log(req.body.to);
	var fromdate=moment(req.body.from).format("DD-MM-YYYY");
    var todate=moment(req.body.to).format("DD-MM-YYYY");
	//console.log(fromdate);
	//console.log(todate);
	var from_x="00:00";
	var to_x="23:59";
	var from_date=gettimestamp(fromdate,from_x);
	console.log(from_date);
    var to_date=gettimestamp(todate,to_x);
    console.log(to_date);
	collection1.find({$and :[{timestamp :{$gte: from_date,$lte: to_date}}]},function(err,docs){
	console.log(docs);
	res.send(docs);
});
});
router.post('/login',function(req,res){
var username=req.body.username;
console.log(username);
var password=req.body.password;
console.log(password);
    login.findOne({"username":username,"password":req.body.password },function(err,docs){
    if(!docs){
    console.log("mismatch");
    res.render('index',{err:"invalid username or password"});
    }
    else if(docs){
    console.log("success");
    delete docs.password;
    req.session.user=docs;
    res.redirect('/index');
    }
    else{
    console.log("error");
    }
    });
});

router.post('/guest',function(req,res){
	var currentdate=moment().format('DD-MM-YYYY');
	var temp=moment().format('HH:mm');
	var timestamp=currentdate+" "+temp;
	  dateTimeParts=timestamp.split(' '),
	  timeParts=dateTimeParts[1].split(':'),
	  dateParts=dateTimeParts[0].split('-');

	var date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
    var datet=date.getTime();
	console.log(datet);
	var data={
		date:req.body.date,
		guestname:req.body.gname,
		description:req.body.des,
		checkoutdate:req.body.checkout
	}
	collection.insert(data,function(err,data){
		if(err){
			console.log("error");
		}
		else{
			console.log(data);
		}
	});
	collection1.insert({"description":req.body.des,"timestamp":datet,"date":req.body.date,"Teamsize":0,"breakfast":0,"breakfasttype":"-","veglunch":0,"nonveglunchtype":"-",
		"nonveglunch":0,"snacks":0,"tea":0,"coffee":0,"vegdinner":0,"nonvegdinner":0,"nonvegdinnertype":"-","amount":0})
	res.redirect('/index');
});

router.post('/edit',function(req,res){
var id=req.body.no;
console.log(id);
collection1.find({"_id":id},function(err,docs){	
res.send(docs);
});
});
router.post('/update',function(req,res){
	
	var data={
		Teamsize:req.body.teamsize,
		breakfast:req.body.breakfast,
		breakfasttype:req.body.breakfasttype,
		veglunch:req.body.veglunch,
		nonveglunch:req.body.nonveglunch,
		snacks:req.body.snacks,
		tea:req.body.tea,
		coffee:req.body.coffee,
		vegdinner:req.body.vegdinner,
		nonvegdinner:req.body.nonvegdinner,
		nonvegdinnertype:req.body.nonvegdinnertype,
		nonveglunchtype:req.body.nonveglunchtype,
		amount:req.body.amount
	}
	collection1.update({"_id":req.body.id},{$set:data},function(err,docs){
		res.redirect('/index');
	});
});
router.post('/remove',function(req,res){
var id=req.body.no;
console.log(id);
collection1.remove({"_id":id},function(err,docs){
res.send(docs);
    });
});
router.get('/logout',function(req,res){
    req.session.reset();
	res.redirect('/');
})

module.exports = router;
