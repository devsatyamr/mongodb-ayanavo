const mongoose = require("mongoose");
/*const mongodb = "mongodb+srv://gtalukdar627:dkXnZpcFNNOef0wz@test-pro-db.cq93bub.mongodb.net/?retryWrites=true&w=majority";
const connect = ()=>{
    try{
        mongoose.connect(mongodb);
        console.log("Connection to Mongodb is successful.");
    }
    catch(err){
        console.log("err");
        console.log("Connection to mongodb is not successful.");
    }
}
connect();*/
let profileSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Mail_passord:String,
    Password:String,
    Confirm_Password:String,
    Address:String,
    Phone_no:String,
    Image:String
});
let Profile = new mongoose.model("Profile",profileSchema);
module.exports = Profile;

//gtalukdar627
//dkXnZpcFNNOef0wz