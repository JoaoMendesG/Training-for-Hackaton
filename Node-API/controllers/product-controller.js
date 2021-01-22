const neDB = require('../configurations/database')
const api = {}

//http://localhost:3000/products > colocar para teste com o verbo GET.
api.findAll = (request, response) => {
    neDB.find({}).sort({name: 1}).exec( (exception, products) => {
        if(exception) {
            const errorMessegeCustom = 'Error, cannot find all registers';
            console.log(errorMessegeCustom, exception)
            response.status(exception.status | 400)
            response.json({'Message': errorMessegeCustom})
        }

        response.status(200)
        response.json(products)
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