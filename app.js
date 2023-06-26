const http = require('http');
require("dotenv").config();
const express = require("express");
require("./db").connect();
const UserRouter = require("./routers/user");
var bodyParser = require('body-parser');
const { notFound, errorHandler } = require("./middleware/error");

const app = express();

app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(UserRouter)
app.use(notFound)
app.use(errorHandler)

const server = http.createServer(app)

app.get("/",(req,res)=>{
    res.send("Task management System")
})

const port = process.env.PORT || 4001

server.listen(port, () => {
    console.log(`server port running  ${port}`);
})



