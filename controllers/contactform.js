const path= require('path');
exports.getcontactform=(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'contact.html'));
}
exports.postcontactform=(req,res,next)=>{
    res.send('<h1>Form Filled Succesfully</h1>')
 };