// creating routes with simple parameters
//psudo code examples
app.get("/post/:id", sendPostWithId)
//urls
/* /posts/12345 */

app.get("/api/v1/todo/:status", sendAllTodosWithStatus)
//url 
/* /api/v1/todo/completed */

/* BAD IDEA unless you have a valid reason */
app.get("/:id", getAnythingWithId)  
//normally you would not do above


//Accessing params
//samples
db = {
    posts:[
        {
            id:"001", 
            title:"Good Things", content:"Lorium ipsum"
        },
        {
            id:"002", 
            title:"Bad Things", content:"FooBar"
        }
    ],
    people:[
        {
            id:"p001", 
            name:"Clint"
        },
        {
            id:"p002", 
            name:"Anna"
        }
    ]
}

app.get("/api/post/:id", (req,res)=>{
    const {id} = req.params;
    /* same as above, but above is better
        const id = req.params.id
    */
    const foundPost = db.posts.find(post=>post.id == id)
    res.send(foundPost)
})

app.get("/api/:type", (req,res)=>{
    const {type} = req.params;
    res.send(db[type])
})



// create routes with complex params
app.get("/api/:type/:id", (req,res)=>{
    const {type,id} = req.params;
    if(!db.hasOwnProperty(type)) return res.send(null)
    foundItem = db[type].find(item=>item.id = id);
    res.send({type,foundItem})
    //same as above
    //res.send({type:type, foundItem:foundItem})
})