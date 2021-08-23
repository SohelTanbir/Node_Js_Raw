const http = require('http');
const fs = require('fs')
const date = require('./modules/myFirstModule')

// create node js server
const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'});
    // read file 
    // fs.readFile('demoFile.html', function(err, data){
    //     res.writeHead(200, {'Content-Type':'text/html'});
    //     res.write(data);
    //     res.end()
    // })

    // write/ create new file
    fs.writeFile('newFile.txt', 'I am write by node js fs module system', function(err, file){
        if(err) throw err
        console.log('File Create Success');
        res.end(file)
    })
});

server.listen(5000);
console.log('server is running...')