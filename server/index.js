const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
require('dotenv/config');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if(err){
        console.log("Sorry mate you need to check connection")
    } else {
    console.log("MongoDB ATlast Connected");
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {console.log(`Server Started on PORT: ${PORT}`)});