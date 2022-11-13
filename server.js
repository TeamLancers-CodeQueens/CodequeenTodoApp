const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/todoRoutes');
const cors =require('cors');

const url = "mongodb+srv://user1:emily@cluster0.xqgqy.mongodb.net/test"

const port = 9000;
const app = express();
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())


app.use('/',cors(), routes)
mongoose.connect(url).then(() => {
   // successful connection
   app.listen(port, ()=> {
       console.log(`server running on port  ${port}`);
   })
}).catch(error => {
   console.error("Failed to start the server due to : ",error)
})