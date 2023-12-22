const express=require('express');
const blogmodel=require('../model/BlogData');
const router=express.Router();
router.use(express.json());
const jwt=require('jsonwebtoken');
router.use(express.urlencoded({extended:true}));
function verifytoken(req,res,next){
    try {
       const token=req.headers.token;
     
       if(!token) throw 'Unauthorized';
        let payload=jwt.verify(token,'reactblogapp');
        if(!payload) throw 'Unauthorized';
        // res.status(200).send(payload);
        next()
    } catch (error) {
      res.status(401).send('Error');
    }
    }
router.get('/',verifytoken,async(req,res)=>{
    try {
      const data= await blogmodel.find();
      console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('No data found');
    } 
})


router.post('/add',async(req,res)=>{
    try {
        var item=req.body;
        const data=new blogmodel(item);
        const saveddata= await data.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
   

})
router.put('/edit/:id',async(req,res)=>{
    try {
        var item=req.body;
       const data= await blogmodel.findByIdAndUpdate(req.params.id,item);
        res.status(200).send('Updated successfully');
    } catch (error) {
        res.status(404).send('Update not working');
    }
   

})
router.delete('/remove/:id',async(req,res)=>{
    
    try {
        const id=req.params.id;
        const data= await blogmodel.findByIdAndDelete(id)
          res.status(200).send('Deleted');
      } catch (error) {
          res.status(404).send('No data found');
      } 
})
module.exports=router;