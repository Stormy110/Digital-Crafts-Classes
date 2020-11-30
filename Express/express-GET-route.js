// The GET method is one of the methods that a http requiest can be sent to a server
// The GET method is the most common and the default method for browsers and fetch
// Catch All - Catch all or '*' is a way to match anything

// Create Default GET route
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
/*
      Routes are created using
      app.{method} function.
  */
 const sendFavicon = (req,res)=>{
    fs.readFile("/favicon.ico",(err,data)=>{
        if(err) return res.send(err);
        res.send(data)
    } )
}
app.get('/favicon.ico', sendFavicon)

app.get("/", (req, res) => {
  res.send("<div>You are at Home Page</div>");
});


app.get("*", (req, res) => {
  console.log("A request has been recieved at the root of the app!");

  res.send("Hello express!");
});
/*
    Routes can have any number of arguments, but the first is the pattern to match 
*/

server.listen(port, () => console.log(`listening on port ${port}`));
