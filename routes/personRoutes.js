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
// commende adedfbfb bf

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const updateperson = req.body;
        const response = await Person.findByIdAndUpdate(personid, updateperson, {
            new: true, // return the updated document
            runValidators: true, // Run mongoose validation
        });
        if (!response) { // check if the response is null
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('updated data');
        res.status(200).json(response);
    } catch (error) {
        console.log(error); // use 'error' instead of 'err'
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports=router;















module.exports =router;