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
app.use(express.json())

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

app.get('/cart/:id', (req,res) => {
    // res.status(200)
    // res.type('application/json')
    // for(let i = 0;i < cart.length; i++){
    //     if(req.params.id==cart[i].id){
    //         res.json(cart[i])
    //     }
    // }    

    res.type('application/json')
    const item = cart.find(i => i.id==req.params.id)
    if(undefined == item){
        res.status(404)
        res.json({})
        return
    }

    res.status(200)
    res.json(item)
})

// PUT /cart/:id
app.put('/cart/:id',(req,res)=>{
    const id = req.params.id;
    const payload = req.body
    
    console.log(payload)
    const idx = cart.findIndex(i=>i.id==payload.id)

    if(idx < 0){
        cart.push(payload)
    }else{
        cart[idx] = payload
    }
    res.status(200)
    res.type('application/json')
    res.json({})

    //upsert
})

app.delete('/cart/:id',(req,res)=>{
    const id = req.params.id;
    
    for(let i=0;i<cart.length;i++){
        if(id==cart[i].id){
            cart.splice(i, 1)
        }
    }

    res.status(200)
    res.type('application/json')
    res.json({})

    //upsert
})

app.post('/cart/:id',(req,res)=>{
    const payload = req.body
    console.log(payload)

    cart.push(payload)

    res.status(200)
    res.type('application/json')
    res.json({})
})

//start the app
app.listen(PORT, () => {
    console.log("App is listening on port "+PORT);
})