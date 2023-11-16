const http= require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Hello from node js server</h1></body>')
    res.write('</html>');
    res.end();
    }
    else if(url=== '/home'){
        res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>')
    res.write('</html>');
    res.end();
    }
    else if(url=== '/about'){
        res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Welcome to about page</h1></body>')
    res.write('</html>');
    res.end();
    }
    else if(url=== '/node'){
        res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body><h1>Welcome to node js page</h1></body>')
    res.write('</html>');
    res.end();
    }
})
server.listen(3000)