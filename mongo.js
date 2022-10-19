const mongoose=require('mongoose');
async function main(){
    await mongoose.connect('mongoDB://localhost:27017/test');

}
main().catch(err=> console.log(err))