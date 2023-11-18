const express=require('express');
const app = express();
app.use('/',(req, res, next)=>{
    console.log('This always runs');
    next();
});
app.use('/addproduct',(req, res, next)=>{
    console.log("next middleware")
    res.send('<h1>Add product</h1>');
});
app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from express</h1>');
    console.log("next middleware")
});

app.listen(3000);