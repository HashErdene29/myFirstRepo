const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const imgPath = './logo.png';

    fs.readFile(imgPath, (err, data) => {
        if(err){
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}. `)
        } else {
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(data);
        }
    })
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});