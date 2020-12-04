const http = require("http");
const express = require("express");
const app = express();
const port = 4432;

//Accessing query strings
app.get("/", (req, res) => {
  console.log(req.query);
});

// Use a query string
db = {
  posts: [
    {
      id: "001",
      title: "Good Things",
      content: "Lorium ipsum",
    },
    {
      id: "002",
      title: "Bad Things",
      content: "FooBar",
    },
  ],
  people: [
    {
      id: "p001",
      name: "Clint",
      age: 39,
    },
    {
      id: "p002",
      name: "Anna",
      age: 37,
    },
  ],
};

app.get("/api", (req, res) => {
  //looks for type && ignores all others
  if (req.query.type) return res.send(db[req.query.type]);

  //if no type just send the whole db
  res.send(db);
});

//more refined but kinda ugly
app.get("/api", (req, res) => {
  if (req.query.type == "people") {
    if (req.query.name) {
      return res.send(db.people.find((p) => p.name == req.query.name));
    }
    return res.send(db.people);
  } else if (req.query.type == "posts") {
    if (req.query.id) {
      return res.send(db.posts.find((p) => p.id == req.query.id));
    }
    return res.send(db.posts);
  }
  res.send(db);
});



// Use query strings with routes
//looks better and works better
app.get("/api/people", (req,res)=>{
    const {name, id} = req.query
    if(id) return res.send(db.people.find(p=>p.id == id));
    if(name) return res.send(db.people.find(p=>p.name == name));
    res.send(db.people)
})

app.get("/api/posts", (req,res)=>{
    const { id} = req.query        
    if(id) return res.send(db.posts.find(p=>p.id == id));
    res.send(db.posts)
})



const server = http.createServer(app);

server.listen(port, () => console.log(`listening on port ${port}`));
