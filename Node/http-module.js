const http = require("http")

// create server

//We are not using req right now
//req(request)/res(response) not neccesary but best practice
const server = http.createServer((req,res)=>{

    //set the status code to 200 before it sends
    res.statusCode = 200;

    //ends the response to the client
    //and sends the data in the argument
    res.end("Hello World")
})

// start server
const http = require("http")
const port = {XXXX}//any port number
  
  //the other content

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})


// Send HTML Content
const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>HTML Content from Node</title>
          </head>
          <body>
              <h1>This is a full HTML document!</h1>
              <ul>
                  <li>It's Valid!</li>
                  <li>It's From Node!</li>
                  <li>It's Just a String!</li>
              </ul>
              <script>
                  console.log("It's like magic")
              </script>
          </body>
      </html>
  `;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})