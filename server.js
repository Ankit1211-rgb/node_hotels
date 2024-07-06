// const express = require('express');
// const app = express();
// const db = require('./db'); // Ensure this file correctly sets up the mongoose connection
// const Person = require('./models/person'); // Ensure the path is correct
// const MenuItem=require('./models/MenuItem');
// app.use(express.json()); // Middleware to parse JSON request bodies
// const bodyParser =require('body-parser');
// app.use(bodyParser.json())

// // Middleware for logging requests


// // Use the middleware

// // Endpoint to save a person
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body; // Assuming the request body contains the person data
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log('data saved successfully');
//         res.status(200).json(response);
//     } catch (error) {
//         console.log('ERROR saving person:', error);
//         res.status(500).json({ error: 'internal server error' });
//     }
// });
// app.post('/menuitem', async (req, res) => {
//     try {
//         const menuData = req.body;
//         const newMenuItem = new MenuItem(menuData);
//         const response = await newMenuItem.save();
//         console.log('Data saved');
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });




// app.get('./menuitem',async(req,re)=>{
//     try{

//                         const data =await MenuItem.find();
//                         console.log("data Fetch")
//                         res.status(200).json(data)


//     }catch(err){
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })





// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/hotel', (req, res) => {
//     res.send("welcome to my hotel... how can I help you");
// });

// app.get('/chicken', (req, res) => {
//     res.send("we have lots of chicken.. which one you want");
// });

// app.get('/idily', (req, res) => {
//     var special_idy = {
//         name: 'rava idily',
//         size: '10 cm',
//         is_sambhar: true,
//         is_chutny: true
//     };
//     res.send(special_idy);
// });

// app.post('/items', (req, res) => {
//     res.send('data save');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// });
const express = require('express');
const app = express();
const db = require('./db'); // Ensure this file correctly sets up the mongoose connection
const Person = require('./models/Person'); // Ensure the path is correct
const MenuItem = require('./models/MenuItem');

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for logging requests
// You can add a logging middleware if needed

// Endpoint to save a person
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body; // Assuming the request body contains the person data
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log('Data saved successfully');
//         res.status(200).json(response);
//     } catch (error) {
//         console.log('ERROR saving person:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Endpoint to save a menu item
// app.post('/menuitem', async (req, res) => {
//     try {
//         const menuData = req.body;
//         const newMenuItem = new MenuItem(menuData);
//         const response = await newMenuItem.save();
//         console.log('Data saved');
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find();
//         console.log('Data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
// app.get('/person/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;
//         if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//             const response = await Person.find({ work: workType });
//             console.log('data fetched');
//             return res.status(200).json(response);
//         } else {
//             return res.status(400).json({ error: 'Invalid work type' });
//         }
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });
// app.get('/menuitem/:tastebest', async (req, res) => {
//     try {
//         const tastebest = req.params.tastebest;
       
//         if (tastebest == 'spicy' || tastebest == 'sour' || tastebest == 'sweet') {
//             const response = await MenuItem.find({ taste: tastebest });

//             console.log('data fetched');
//             return res.status(200).json(response);
//         } else {
//             return res.status(400).json({ error: 'Invalid taste type' });
//         }

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });




// Endpoint to get menu items
// app.get('/menuitem', async (req, res) => {
//     console.log("GET /menuitem called"); // Debugging statement
//     try {
//         const data = await MenuItem.find();
//         console.log('Data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });





app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/hotel', (req, res) => {
    res.send('Welcome to my hotel... how can I help you');
});

app.get('/chicken', (req, res) => {
    res.send('We have lots of chicken.. which one do you want');
});

app.get('/idily', (req, res) => {
    const special_idily = {
        name: 'rava idily',
        size: '10 cm',
        is_sambhar: true,
        is_chutny: true
    };
    res.send(special_idily);
});

app.post('/items', (req, res) => {
    res.send('Data saved');
});
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes')
app.use('/menuitem', menuRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
