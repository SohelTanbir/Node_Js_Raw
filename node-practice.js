// build in module
const http = require("http");
const url =  require("url");
const fs =  require("fs")
const upperCase = require("upper-case")


// custom modules
const date = require("./_myModules/custom-module");

// port 
const port = 5000;



// create server
const server = http.createServer(function(req, res){
    // http and url module
    // const query = url.parse(req.url, true).query;
    // const name = query.name;
    // const roll = query.roll;
    // console.log(name , roll);

    // use case of fs module

    // read file
    // fs.readFile("./file/fs.html", function(err, data){
    //     console.log('error = '+ err);
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(data);
    //     return res.end()
    // })


    // create file
    // fs.appendFile("./file/text.txt", "This is my content", (err)=>{
    //     if (err) throw err;
    //     console.log("saved!");
    //     res.end()
    // })
   
    // create a empty file
    // fs.open('./file/text1.txt', 'w', function(err, file){
    //     if(err) throw err;
    //     console.log("saved!");
    //     res.end();
    // })

    // create a file if file already exist it will be override
    // fs.writeFile("./file/newText.txt", "This is new replace content", function(err){
    //     if(err) throw err;
    //     console.log("File write and created!");
    // })

    // delete file
    // fs.unlink("./file/text1.txt", (err)=>{
    //     if(err) throw err;
    //     console.log("Deleted Success");
    // })

    // rename file
//   fs.rename("./file/demo.txt", './file/rename.txt', function(err){
//       if(err) throw err;
//       console.log("renamed success");
//   })

// file module end here


// // url module start
const paths = url.parse(req.url, true);
// console.log(paths.search);
// console.log('pathname = ' + paths.pathname);
const pathname = paths.pathname;
if(pathname == '/login'){
    fs.readFile("./file/login.html", function(err, data){
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}
if(pathname == '/signup'){
    fs.readFile("./file/signup.html", function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        if(err) throw err;
        res.write(data);
        res.end()
    })
}

res.write(upperCase.upperCase("Welcome to npm install modules"));
res.end()

// url module end


});


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
