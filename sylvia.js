const http = require("http")

const PORT = 1889

const server = http.createServer((request , response)=>{
   if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html"});
    response.write(`<html><body><p>This is my home Page.</p></body></html>`)
    response.end();
   }else if (request.url === "/about") {
    response.writeHead(200, { "content-type": "text/html"});
    response.write(`<html><body><p>This is my About Page.</p></body></html>`)
    response.end();
   }else if (request.url === "/contact") {
    response.writeHead(200, { "content-type": "text/html"});
    response.write(`<html><body><p>This is my Contact Page.</p></body></html>`)
    response.end();
   } else response.end("Invalid Request");
});

server.listen(PORT , ()=>{
    console.log("")
    console.log("port is up and listening", PORT);
});


const http = require("http")

const port = 2000

const server1 = http.createServer((request , response)=>{
    if (request.url === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        response.write(`<html><body><p>This is my home page</p></body></html>`)
        response.end();
    }else if (request.url ==="/about") {
        response.writeHead(200, {"content-type": "text/html"});
        response.write(`<Html><Body><p>This is my about page</p></Body></Html>`)
        response.end()
    }else if (request.url === "/contacts"){
        response.writeHead(200, {"content-type"});
        response.write(`<Html><body><p>This is my contacts page</p></body></Html>`)
        response.end()
    }else response.end("invalid request");
})

server.listen(port, ()=>{
    console.log("port is up and listening", port);
});