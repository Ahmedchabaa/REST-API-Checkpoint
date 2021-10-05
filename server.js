const express = require ("express");
require('dotenv').config();
var bodyParser = require('body-parser')


const app = express ();

const DBconnect = require ("./DBconnect");
DBconnect();
app.use(bodyParser.json())

app.use("/user",require("./routes/user"));

app.use(express.json());

app.listen(process.env.PORT, (error)=> {
error ? console.log(error):console.log("server is running");
});

