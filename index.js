const express = require('express');
const path    = require('path');
const server  = express();
const port    = 2000;


server.use(express.json()); 
server.use(express.urlencoded({extended: false})); 

server.listen(port, function(error){   
    if(error) {
        console.log('something was done incorrect', error) 
    } else {
        console.log('server is on the port ' + port)
    }
});

server.get('/', (req, res) => {
    res.json({message:'Docker has been process!'})
});
