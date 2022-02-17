// build in module
const http = require("http");
const url =  require("url");
const fs =  require("fs")
// custom modules
const date = require("./_myModules/custom-module");
const { throws } = require("assert");

// port 
const port = 5000;



// create server
const server = http.createServer(function(req, res){
    res.write("Server is running...........")
    // res.writeHead(200, {'content-type':'text/html'});

    // http and url module
    // const query = url.parse(req.url, true).query;
    // const name = query.name;
    // const roll = query.roll;
    // console.log(name , roll);

    // use case of fs module

    // read file
    // fs.readFile("./file/fs.html", function(err, data){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(data);
    //     console.log('error = '+ err);
    //     return res.end()
    // })


    // create file
    // fs.appendFile("./file/text.txt", "This is my content", (err)=>{
    //     if (err) throw err;
    //     console.log("saved!");
    //     res.end()
    // })
   
    // create a empty file
    fs.

});


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
