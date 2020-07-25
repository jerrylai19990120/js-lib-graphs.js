
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/pub'));

app.get('/', (req, res)=>{
    res.send("<h1>Successfully connected to server.</h1>");
});

app.listen(port, ()=>{
    console.log(`listen on port ${port}`);
});
