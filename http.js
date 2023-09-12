const http = require("http")

const PORT = 2000

const server = http.createServer((request , response)=>{
    response.writeHead(200)
    response.write("Happy Hacking!")
    response.end()
})

server.listen(PORT , ()=>{
    console.log("port is up and listening")
})
