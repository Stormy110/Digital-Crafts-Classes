// How to make an AJAX Request

const request = new XMLHttpRequest();
request.onreadystatechange = (evt) => {
    let req = evt.target;
    if(req.readyState !== 4) return;
    if(req.status === 200) console.log(req.response)
};
request.open("GET",'./samples/test.txt')
request.send()


// Modularize

//ajax.js
const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        //callback doesnt return anything
        callback("")
    })
    request.open(method,url)
    request.send()
}

export default ajax;
//any otherfile
import ajax from "./folder/ajax.js"

const callback = (res, err)=>document.body.append(res)  // res can be any name, it corresponds to all info in the url file  
ajax("./samples/text.txt", callback)

// or 

ajax("sample.url", (results)=>{
    document.body.append(results)
    //or any code you want
})