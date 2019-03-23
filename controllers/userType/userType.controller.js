const models = require('../../models/index');

module.exports = {
  getUserTypes(req, res) {
    return models.userType.findAll()
      .then(resp => res.json(resp))
      .catch(error => console.log(error))
  }
}