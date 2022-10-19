const exp =require('express');
const app=exp()
app.listen(3500, ()=>console.log('server is listening at http://localhost:3500')
)

app.get('/',(req,res)=>{
    res.send('Hello from server!!')
})