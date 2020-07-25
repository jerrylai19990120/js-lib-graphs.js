
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/pub'));

app.get('/', (req, res)=>{
    res.sendFile("./examples.html");
    res.sendFile("./examples.js");
    res.sendFile("./examples.css");

});

app.listen(port, ()=>{
    console.log(`listen on port ${port}`);
});
