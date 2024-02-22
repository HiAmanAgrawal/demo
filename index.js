const express = require('express');
const App = express();
const port = 8081;
App.get('/', (req, res)=>{
    res.send(`<h1>Hello</h1>`);
})
App.listen(port, ()=>{
    console.log("App is working.");
})

