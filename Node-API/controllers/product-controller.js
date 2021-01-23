const { exception } = require('console');
const { request, response } = require('express');
const neDB = require('../configurations/database');
const { route } = require('../configurations/express');
const app = require('../configurations/express');
const api = {}

//http://localhost:3000/products > colocar para teste com o verbo GET.
api.findAll = (request, response) => {

    neDB.find({}).sort({name: 1}).exec( (exception, products) => {
        if(exception) {
            const errorMessageCustom = 'Error, cannot find all registers';
            console.log(errorMessageCustom, exception)
            response.status(exception.status | 400)
            response.json({'Message': errorMessageCustom})
        }

        response.json(products)
    })
}

api.findById = (request, response) => {

    neDB.findOne({_id: request.params._id}, (exception, product) => {
        if(exception) {
            const errorMessageCustom = 'Error, cannot find the register';
            console.log(errorMessageCustom, exception)
            response.status(exception.status | 400)
            response.json({'Message': errorMessageCustom})
        }

        response.json(product)
    })
}

//http://localhost:3000/products > colocar para teste com o verbo POST.
api.save = (request, response) => {
    const canonical = request.body;

    neDB.insert(canonical, (exception, product) => {
        if(exception) {
            console.log('Error, cannot save the register')
        }

        response.status(201)
        response.json(product)
    })
}

module.exports = api

/*
neDB.findOne({ name: 'Chest' }).exec((exception, products) => {
    if (exception) {
    const setence = 'Error to get all the registers'
    console.log(setence, exception)
    response.status(exception.status | 400)
    response.json({ 'message': setence })
    }
    response.json(customers)
    })*/