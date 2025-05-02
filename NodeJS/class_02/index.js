const fs = require("fs")
const path = require("path")
const http = require("http")

const PORT = 3000

const server = http.createServer((request, response)=>{
    response.write("hello from server")
    response.end()
})

server.listen(PORT, function(){
    console.log(`server is running on port http://localhost:${PORT}`)
})
