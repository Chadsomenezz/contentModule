const http = require("http");
const base_url = require("./helper/base_url");
const routes = require(`./config/routes`);


const server = http.createServer((req,res)=>{
    routes(req,res);
})

server.listen(base_url.port);
console.log('listening to port: ',base_url.port);