const mongoose =require('mongoose')

const {Schema}=mongoose

const CustSchema=new Schema({
    code:{type:String,required:true},
    name:{type:String,required:true},
    streets:[new Schema({
        streetCode: {type:String,required:true},
        streetName: {type:String, required:true}
    },{ _id:false })]
    // DateOfBirth:{type:Date,required:true},
    // Telephon:{type:String,required:true},
    // Pelephon:{type:String,required:true}
})



const customer = mongoose.model('customer',CustSchema)


module.exports=customer