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
