const http = require('http')
const app = require('./configurations/express')

http.createServer(app).listen(3000, function () {
    console.log(`[Products Application - ${(new Date()).toISOString()}] Online >>> port: ${this.address().port}`)
})