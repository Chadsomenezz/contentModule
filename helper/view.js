const fs = require("fs");
const base_url  = require("../helper/base_url");

const view = (filename,type,mode)=>{
    const fileType = type.split("/")[1];
    fs.readFile(`${base_url.view}${filename}.${fileType}`,(err,data)=> {
        mode.res.writeHead(200,{'Content-Type':`${type}`});
        mode.res.write(data);
        mode.res.end();
    })
}

module.exports = view;