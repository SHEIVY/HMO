const mongoose =require('mongoose')

const {Schema}=mongoose

const CustSchema=new Schema({
    // custName:[new Schema({
    //     firstName: {type:String,required:true},
    //     lastName: {type:String, required:true}
    // })],
    firstName: {type:String,required:true},
    lastName: {type:String, required:true},
    custId:{type:String,required:true},
    address:[new Schema({
        city: {type:String,required:true},
        street: {type:String, required:true},
        streetNumber:{type:Number, required:true}
    },{ _id:false })],
    dateOfBirth:{type:String,required:true},
    telephon:{type:String,required:true},
    pelephon:{type:String,required:true}
})



const customer = mongoose.model('customer',CustSchema)


module.exports=customer