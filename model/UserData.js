const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    email:String,
    password:String,
    phone:Number
})
const UserData=mongoose.model('userdata',Schema);
module.exports=UserData;