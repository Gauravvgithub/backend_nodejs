const fs = require("fs")
const path = require("path")
const http = require("http")

const PORT = 3000

const server = http.createServer((request, response)=>{
    // console.log(request.url)
    // response.write("hello from server")
    // response.end()
    if(request.url === '/'){
        fs.readFile(path.join(__dirname, "public", "index.html"), function(error, data){
            response.writeHead(200,{"content-type":"text/html"})
            response.end(data)
        })
    }
    else if(request.url === '/about'){
        fs.readFile(path.join(__dirname, "public", "about.html"), function(error, data){
            response.writeHead(200,{"content-type":"text/html"})
            response.end(data)
        })
    }
    else if(request.url === '/contact'){
        fs.readFile(path.join(__dirname, "public", "contact.html"), function(error, data){
            response.writeHead(200,{"content-type":"text/html"})
            response.end(data)
        })
    }
    else if(request.url === '/custom/style.css'){
        fs.readFile(path.join(__dirname, "public", "custom/style.css"), function(error, data){
            response.writeHead(200,{"content-type":"text/css"})
            response.end(data)
        })
    }
})

server.listen(PORT, function(){
    console.log(`server is running on port http://localhost:${PORT}`)
})
