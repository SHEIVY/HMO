const router =require('express').Router()

const customer_model=require('../models/HMO_customers')

router.get('/getCustomers',(req,res)=>{
    customer_model.find({},{_id:0,name:1,code:1},(err,data)=>{
        if(err){
            throw err
        }
        res.send(data)
    })
})

router.get('/getcustomers/:code',(req,res)=>{
    let code=req.params.code

    customer_model.findOne({code:code},{_id:0,streets:1},(err,data)=>{
        if(err)
        throw err
        res.send(data)
    })
})

module.exports=router

