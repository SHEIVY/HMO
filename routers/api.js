const router =require('express').Router()

const customer_model=require('../models/HMO_customers')

router.get('/getCustomers',(req,res)=>{
    customer_model.find({},{_id:0,firstName:1,lastName:1,custId:1,address:1,dateOfBirth:1,telephon:1,pelephon:1},(err,data)=>{
        if(err){
            throw err
        }
        res.send(data)
    })
})

// custName:[new Schema({
//     firstName: {type:String,required:true},
//     lastName: {type:String, required:true}
// },
// custId:{type:String,required:true},
// address:[new Schema({
//     city: {type:String,required:true},
//     street: {type:String, required:true},
//     streetNumber:{type:Number, required:true}
// },{ _id:false })],
// dateOfBirth:{type:Date,required:true},
// telephon:{type:String,required:true},
// pelephon:{type:String,required:true}

router.get('/getcustomers/:custId',(req,res)=>{
    let custId=req.params.custId
    // ,dateOfBirth:1,telephon:1,pelephon:1
    customer_model.findOne({custId:custId},{_id:0,firstName:1,custId:1,lastName:1,address:1,dateOfBirth:1,telephon:1,pelephon:1},(err,data)=>{
        if(err)
        throw err
        res.send(data)
    })
})

module.exports=router

