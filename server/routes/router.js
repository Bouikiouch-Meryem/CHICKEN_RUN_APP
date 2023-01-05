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
 *  @description add chickens
 *  @method GET /add-chcken
 */
route.get('/add-chicken', services.add_chicken)

/**
 *  @description for update chicken
 *  @method GET /update-chicken
 */
route.get('/update-chicken', services.update_chicken)


// CHICKEN RUN API
route.get('/chicken', controller.find_chicken); // DONE
route.post('/chicken', controller.create_chicken); // DONE
route.put('/chicken/:id', controller.update_chicken); // DONE
route.patch('/chicken/:id', controller.updateFields_chicken); // DONE
route.delete('/chicken/:id', controller.delete_chicken); // DONE
route.patch('/chicken/run/:id', controller.increase_steps_chicken); // DONE



module.exports = route