const router=require('express').Router()

const customer_model=require('../models/HMO_customers')


router.post('/addCustomer',(req,res)=>{
    const customer=req.body

    let c=new customer_model(customer)
    


    c.save()

    res.send('save secssfully')


})



router.post('/addstreet',(req,res)=>{
    const obj=req.body

     customer_model.updateOne({ code:obj.code },{$push:{ streets:obj.street }},(err,data)=>{
         if(err)
         throw err
         console.log("good")
         console.log(data)
         res.send('succced')
       
     })
    
   
})

module.exports=router
