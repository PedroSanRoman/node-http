const http = require ('node:http');
const { templateGeneral } = require('./data.js');

const server = http.createServer ((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end (templateGeneral)
})

server.listen (0, () => {
    const port = server.address().port;
    console.log(`Servidor escuchando en http://localhost:${port}`);
})