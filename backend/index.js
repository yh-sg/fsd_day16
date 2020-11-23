//install lib
const express = require("express");

//variables
const cart = [
    {id:"abc",item:'apple', quantity: 10},
    {id:"def",item:'orange', quantity: 7},
    {id:"hij",item:'pear', quantity: 12},
    {id:"klm",item:'grapes', quantity: 5},
]

//configure the env variable
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;


//create an instance of express
const app = express();

//create resources

//GET /cart
app.get('/cart', (req,res) => {
    res.status(200)
    res.type('application/json')
    res.json(cart)
})

//start the app
app.listen(PORT, () => {
    console.log("App is listening on port "+PORT);
})