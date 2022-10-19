const router=require('express').Router()

const customer_model=require('../models/HMO_customers')


router.post('/addCustomer',(req,res)=>{
    const customer=req.body
    
    let c=new customer_model(customer)
      console.log(c)
    c.save()

    res.send('save secssfully')


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
// })

router.post('/updateCustomer',(req,res)=>{
       const obj=req.body
    // ,dateOfBirth:obj.dateOfBirth,telephon:obj.telephon1,pelephon:obj.pelephon1
       customer_model.updateOne({ custId:obj.custId },{$push:{ firstName:obj.firstName,lastName:obj.lastName,custId:obj.custId,address:obj.address,dateOfBirth:obj.dateOfBirth,telephon:obj.telephon,pelephon:obj.pelephon }},(err,data)=>{
         if(err){
             console("there is err")
         throw err
         }
         console.log("good")
         console.log(data)
         res.send('succced')
       
     })
    
   
})

module.exports=router
