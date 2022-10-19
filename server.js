const exp =require('express');
const path=require('path')

const api_router=require('./routers/api')
const admin_router=require('./routers/admin')

const mongoose=require('mongoose');

const app=exp()

async function main(){
    await mongoose.connect('mongodb://localhost:27017/customers');
}

main().then(_=>{
    app.listen(3500, ()=>console.log('server is listening at http://localhost:3500')
)
})

app.use('/script',exp.static('./public/scripts'))

app.get('/',(req,res)=>{
    console.log(req)
    res.sendFile(path.join(__dirname,'./pages/index.html'))
})

app.get('/form',(req,res)=>{
    console.log(req)
    res.sendFile(path.join(__dirname,'./pages/form.html'))
})

app.use('/api',api_router)
app.use(exp.json())
app.use('/admin',admin_router)