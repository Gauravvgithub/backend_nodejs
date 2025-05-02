const http = require("http")

const PORT = 7000
const HOSTNAME = "Gaurav"

const server = http.createServer(function (request, response) {
    console.log(request.url)
    response.write(`hello from server, ${HOSTNAME}`)
    response.end()
})

server.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})