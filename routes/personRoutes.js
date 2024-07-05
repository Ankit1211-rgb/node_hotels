const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async(req,res)=>{
        try {
        const data =req.body;
        const newPerson=new Person(data)
        const response = newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
        } catch (error) {
            console.log(err)
            res.status(500).json({error: 'internal server error'})
        }

})
// get method to gey the person 
router.get('/',async (req,res)=>{
    try {
        const data =await Person.find()
        console.log('data fetched')
        res.status(200).json(data)
    } catch (error) {
        console.log(err)
        res.status(500).json({error: 'Internal sever error'})
    }
})




















module.exports =router;