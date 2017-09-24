const mongoose = require('mongoose');

var DB_URL = 'mongodb://SEavanger:SEavanger@ds139964.mlab.com:39964/se_avangers';

mongoose.connect(DB_URL, {useMongoClient: true});

mongoose.connection.on('connected',function () {
    console.log('Mongoose connect ' + DB_URL + " success");
});

// New Schema
var Schema = mongoose.Schema;

// Schema attr info
var UserSchema = new Schema({
    username: {type: String},
    userpwd: {type: String},
    userage: {type: Number},
    logindate: {type: Date}
});

//var User = mongoose.model("User",UserSchema);

function User_Insert(UserSchema, Table, usrName, usrPwd, usrAge) {
    var User = mongoose.model(Table ,UserSchema);
    //A user info used to insert
    var user_1 = new User({
        username: usrName,
        userpwd: usrPwd,
        userage: usrAge,
        logindate: new Date()
    });
    //insert user_1's info
    user_1.save(function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Success Res: " + res);
        }
    });
}

// from front-end (in the future)
var usrName = 'Alex Lee'
var usrPwd = 'madan'
var usrAge = 20

// insert
User_Insert(UserSchema, "User", usrName, usrPwd, usrAge);
