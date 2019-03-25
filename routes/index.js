const controllers = require('../controllers/');

module.exports = (app) => {
  app.post('/api/subscribe', controllers.AuthController.subscribe);

  app.get('/api/user-type', controllers.UserTypesController.getUserTypes);

  app.get('/api/users', controllers.AuthController.getUsers);
}