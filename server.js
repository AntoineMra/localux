const port = process.env.PORT || 7000;
const app = require('./app')
const http = require('http').createServer(app);
http.listen(port)