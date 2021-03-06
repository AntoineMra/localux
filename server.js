const express = require('express') 
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express() 
const port = process.env.PORT || 7000;
const http = require('http').createServer(app);
http.listen(port)

var corsOptions = {
  origin: "http://localhost:7000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// simple route
app.get('/' , (req,res) => {
        res.send("Bienvenue sur l'API de Localux" );
      });

require("./routes/appRoute")(app);