const express=require('express');
const bodyparser= require('body-parser');
const app = express();
const adminroutes= require('./Routes/admin');
const shoproutes =require('./Routes/shop');
app.use(bodyparser.urlencoded({extended:true}));
app.use(shoproutes);
app.use('/admin',adminroutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);