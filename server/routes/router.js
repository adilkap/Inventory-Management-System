const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description Export to CSV
 * @method GET /export
 */
route.get('/export', services.export);

/**
 *  @description add item
 *  @method GET /add-item
 */
route.get('/add-item', services.add_item)

/**
 *  @description for update item
 *  @method GET /update-item
 */
route.get('/update-item', services.update_item)


// API
route.post('/api/items', controller.create);
route.get('/api/items', controller.find);
route.put('/api/items/:id', controller.update);
route.delete('/api/items/:id', controller.delete);


module.exports = route