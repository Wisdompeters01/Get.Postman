import http, { IncomingMessage, ServerResponse } from "http";
import event from "events";
const port: number = 2000;

interface iData {
  id: number;
  name: string;
  phone: number;
  stack: string;
}

interface iMessage {
  message: string;
  success: boolean;
  data: null | {} | {}[];
}

const set08: iData[] = [
  {
    id: 1,
    name: "joan",
    phone: 8023474637,
    stack: "Full-Stack",
  },
  {
    id: 2,
    name: "Habib",
    phone: 8023474637,
    stack: "Full-Stack",
  },
  {
    id: 3,
    name: "Daniel",
    phone: 8023474637,
    stack: "Full-Stack",
  },
  {
    id: 4,
    name: "SEAN",
    phone: 8023474637,
    stack: "Full-Stack",
  },
  {
    id: 5,
    name: "joan",
    phone: 8023474637,
    stack: "Full-Stack",
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/Json");
    const { method, url } = req;
    let status: number = 404;

    let response: iMessage = {
      message: "failed",
      success: false,
      data: null,
    };
    const container: any = [];
    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        //Get method
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "All set08 data gotten";
          response.success = true;
          response.data = set08;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //post method
        if (url === "/" && method === "POST") {
          status = 201;
          const body = JSON.parse(container);
          set08.push(body);
          response.message = "SUCCESSFULLY added";
          response.success = true;
          response.data = set08;
          res.write(JSON.stringify({ response, status }));

          res.end();
        }

        //patch method
        //put method
      });
  }
);

server.listen(port, () => {
  console.log("Server is up and running");
});




















// import http, {IncomingMessage, ServerResponse} from "http";
// import fs from "fs"
// import path from "path"

// const port: number = 2000


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


// const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
//     res.writeHead(200)

//     let connect: string = "site/";

//     switch (req.url) {
//         case "/":
//             connect += "home.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             connect += "about.html";
//             res.statusCode = 200;
//             break;
//         case "/contacts":
//             connect += "contacts.html";
//             res.statusCode = 200;
//             break;
//         default:
//             connect += "404.html";
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path.join(__dirname, connect), (err, data) => {
//         if (err) {
//             console.log("An error occured", err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     });

// if (req.url === "/" && req.method === "GET" && res.statusCode === 200){
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(Dataset));
//     res.end();
// }

// res.end();


// });

// Server.listen(port , ()=>{
//     console.log("")
//     console.log("Server is listening to port on port", port);
// });
