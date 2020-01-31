var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://Chand:Chand@123@cluster0-xwzxc.azure.mongodb.net/NobleHouse", {useNewUrlParser: true});
var db = mongoose.connection;
db.on('connected',function(){console.log("you have successfully connected.");})
module.exports.User=require('./user');
module.exports.Vote=require('./vote');