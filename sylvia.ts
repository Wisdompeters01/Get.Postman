import http, {IncomingMessage, ServerResponse} from "http";
import fs from "fs"
import path from "path"

const port: number = 2000


// const Dataset = [
//     {
//         id: "1",
//         name: "Zion Spiderman",
//         stack: "Half stack",
//     },
//     {
//         id: "2",
//         name: "Jemima Udoka",
//         stack: "Entry Level",
//     },
//     {
//         id: "3",
//         name: "Wisdom Peters",
//         stack: "Full stack",
//     },
// ];


const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.writeHead(200)

    let connect: string = "site/";

    switch (req.url) {
        case "/":
            connect += "home.html";
            res.statusCode = 200;
            break;
        case "/about":
            connect += "about.html";
            res.statusCode = 200;
            break;
        case "/contacts":
            connect += "contacts.html";
            res.statusCode = 200;
            break;
        default:
            connect += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path.join(__dirname, connect), (err, data) => {
        if (err) {
            console.log("An error occured", err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

// if (req.url === "/" && req.method === "GET" && res.statusCode === 200){
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(Dataset));
//     res.end();
// }

// res.end();


});

Server.listen(port , ()=>{
    console.log("")
    console.log("Server is listening to port on port", port);
});
