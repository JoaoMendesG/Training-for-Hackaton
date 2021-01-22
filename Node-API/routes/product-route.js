const api = require('../controllers/product-controller')

module.exports = (app) => {
    app.route('/products') //endpoint
        .get(api.findAll)
        .post(api.save)

}