let express = require('express')
let path = require('path')
let http = require('http')


let app = express();

app.use("/public",express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});


const server = http.createServer(app);

server.listen(3000, "localhost", function() {
  console.log(`Starting Server on Port 3000`);
});