//install lib
const express = require("express");
const cors = require("cors")

//variables
const cart = [
    {id:"abc",item:'Apple', quantity: 10},
    {id:"def",item:'Orange', quantity: 7},
    {id:"hij",item:'Pear', quantity: 12},
    {id:"klm",item:'Grapes', quantity: 5},
]

//configure the env variable
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;


//create an instance of express
const app = express();

// Add CORS header to the response
app.use(cors());

//create resources

//GET /cart
app.get('/cart', (req,res) => {
    res.status(200)
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.type('application/json')
    res.json(cart)
})

//start the app
app.listen(PORT, () => {
    console.log("App is listening on port "+PORT);
})