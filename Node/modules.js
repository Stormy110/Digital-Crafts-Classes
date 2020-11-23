const os = require("os")
const http = require("http")
const fs = require("fs")
// you can name them whatever but standard practice is to use same name as module

console.log(os.hostname())
const getInfo = ()=>{
    console.log(os.platform(),os.homedir(), os.hostname())
}
getInfo()