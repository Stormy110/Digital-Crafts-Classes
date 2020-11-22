fetch("https://api.chucknorris.io/jokes/random")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    // do whatever with data
})

// possible to do fetch inside a fetch
fetch("https://api.chucknorris.io/jokes/random")
.then(res=>res.json())
.then(data=>fetch("https://api.chucknorris.io/jokes/random"))
.then(res=>res.json())
.then(fdata=>console.log(fdata))