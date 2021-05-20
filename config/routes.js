const base_url  = require("../helper/base_url");
const view = require("../helper/view");


module.exports =  function (req,res){
    if(req.url === "/"){
        view('index','text/html',{req,res})
    }
    else {
        view('not_found','text/html',{req,res})
    }

}