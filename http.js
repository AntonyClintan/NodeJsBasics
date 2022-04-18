const http = require('http')

const server = http.createServer((req ,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Our Home page')
    }
    if(req.url === '/about'){
        res.end('Here is About page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We Can't seem to find the page you are looking for </p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000)