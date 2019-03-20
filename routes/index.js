const controllers = require('../controllers/');

module.exports = (app) => {
  app.post('/api/subscribe', controllers.AuthController.subscribe)
}