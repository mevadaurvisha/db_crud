const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/router')
const server = express();
const port = process.env.PORT || 3008;
const path = require('path');
const PATH= path.join(__dirname , "/views");
const db = require('./config/db');

server.set('view engine' , 'ejs');
server.set('views', PATH);

server.use(express.static(PATH));
server.use('/uploads',express.static(path.join(__dirname , "/uploads")))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/' , router);

server.listen(port , (err) => {
    if(!err){
        console.log(`server is running on http://localhost:${port}`);
        
    }

});