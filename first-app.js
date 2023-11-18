const express=require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("middleware");
    next();
});

app.use((req,res,next)=>{
    res.send('<h1>Hello from express</h1>');
    console.log("next middleware")
});

app.listen(3000);