let os = require("os")

const getInfo = ()=>{
    let mem = os.freemem()
    let netIS = os.networkInterfaces()
    let userInfo = os.userInfo()
    let info = [mem,netIS,userInfo]
    console.log(info)
}
getInfo()