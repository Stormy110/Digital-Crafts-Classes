const http = require("http");
const express = require("express");

/* 
      The app object is where  most of the express "magic" happens.
  */
const app = express();
const port = 4432;

/* 
      The app object is passed as the options argument.
      http.createSever allows the options object to be omitted so we 
      have not used it before. Instead we are ommiting the callback.
  */
const server = http.createServer(app);

server.listen(port, () => console.log(`listening on port ${port}`));
