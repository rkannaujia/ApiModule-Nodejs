const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url == "/home"){
        res.end("I am home page");
    } else if (req.url == "/userApi"){
        fs.readFile(`userapi.json`, 'utf-8', (err, data) =>{
            console.log(data);
            res.end(data);
        });
    } 
  });
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the 8000 port .");
});