const http= require('http');

const routs=require('./routes');

const server=http.createServer(routs);
server.listen(3000)