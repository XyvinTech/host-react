const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    title:String,
    image:String,
    description:String,
    date_update:Date
})
const BlogData=mongoose.model('blogdata',Schema);
module.exports=BlogData;