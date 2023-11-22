const express=require('express');

const router=express.Router();
const pathcontroller=require('../controllers/contactform')
router.get('/contactus',pathcontroller.getcontactform);
router.post('/success',pathcontroller.postcontactform)
module.exports=router;