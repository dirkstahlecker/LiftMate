var express = require('express');


var mongo = require('mongodb');
var mongoose = require('mongoose');

///////////////////// Configure database
var workoutSchema = mongoose.Schema({
	weeks: Number,
	days: [],
	type: String,
	exercises: []
});
var cardioSchema = mongoose.Schema({
	exercise: String,
	length: Number
});
var liftingSchema = mongoose.Schema({
	lift: String,
	weight: Number,
	sets: Number,
	reps: Number
});
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    height: String,
    weight: Number,
    level: String
});

var Workout = mongoose.model('Workout',workoutSchema);
var Cardio = mongoose.model('Cardio',cardioSchema);
var Lift = mongoose.model('Lift',liftingSchema);
var User = mongoose.model('User',userSchema);


///////////////////// Routing


var app = express();

app.use(function(req,res, next){
    req.userDB = UserAccount;
    req.tweetDB = Tweet;
    next();
});


module.exports = app;

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, process.env.OPENSHIFT_NODEJS_IP);
console.log("Listening on port 8080");