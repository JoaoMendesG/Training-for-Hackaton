const Datastore = require('nedb') // npm install --save nedb
const dbName = './resources/database/products.db'
let neDB

if (!neDB) {
    neDB = new Datastore({
        filename: dbName,
        autoload: true
    })
    console.log(`[Products Application - ${(new Date()).toISOString()}] >Database [${dbName}] is UP !<`)
}

module.exports = neDB