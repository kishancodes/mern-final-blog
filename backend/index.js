var cors = require('cors');
let express = require('express');
require('dotenv').config();
let bodyParser = require('body-parser');
let app = express();
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");




app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
var check = mongoose.connection;

if(!check){
    console.log("Connection Error")
}
else{
    console.log("Connected")
}

var port = process.env.PORT || 3001;


app.get('/', (req, res) => res.send('Testing Connection'));
app.use(cors());
app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("Server on : " + port);
});