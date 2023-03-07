import mongoose from 'mongoose'
import express from "express"
import Contact from '../models/contactUs'
const router = express.Router();
router.post(`/add-contact/`,(req,res)=>{
    console.log(req.body)
    const contact=new Contact(req.body);
    contact.save()
        .then((contact)=>{
            res.status(200).send("Query added successfully");
        })
        .catch((err)=>{
            res.status(400).send('adding data failed');
        });
});
export default router;
