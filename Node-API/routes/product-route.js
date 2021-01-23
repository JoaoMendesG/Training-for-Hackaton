const { findById } = require('../controllers/product-controller')
const api = require('../controllers/product-controller')

module.exports = (app) => {
    app.route('/products') //endpoint
        .get(api.findAll)
        .post(api.save),
    app.route('/products/:_id')
    .get(api.findById)
}