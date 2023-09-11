const host = '127.0.0.1';
const port = 4000;
const http = require('http');
const fs = require('fs');
const httpStatus = require('http-status-codes');
const routes = {
    '/': 'src/views/index.html'
};



// fs.readFile('src/views/index.html','utf8',(err, content)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(content);
// });

const server = http.createServer((req,res) => {
    // res.statusCode = '200';
    // res.setHeader('Content-Type','text/html');
    // res.sendFile('/views/index.html');
    res.writeHead(httpStatus.StatusCodes.OK,{
        'Content-Type': 'text/html'
    });
    if (routes[req.url]){
        fs.readFile(routes[req.url],(error,data)=>{
            res.write(data)
            res.end();
        });
    }else {
        res.end('<h2> Data not found</h2>');
    }
});

server.listen(port,host,()=>{
    console.log(`Server on ${host}:${port}`);
});

