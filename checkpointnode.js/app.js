const fs=require('fs')
const http=require('http')
// fs.writeFileSync('msg.tx','workshop node js' , (err)=>{
//     if (err)  throw err
//     console.log ('file created') 

// })
// console.log ('program ended')
// const data=fs.readFileSync('msg.tx')
// console.log (data.toString())
// console.log ('programme Ended')
// fs.readFile('mssg.tx',(err,data)=>{
//     if (err) throw err
//     console.log(data.toString())
// })

const server=http.createServer((req,res)=>{
    res.write('<h1>hello world</h1>')
    res.end()

})
server.listen (5000,()=>console.log("server runing on port 500"))