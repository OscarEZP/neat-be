const models = require('../../models/index');

module.exports = {

  subscribe(req, res) {
    return models.Auth.create(req.body)
      .then(resp => res.json(resp))
      .catch(error => console.log(error))
  },

  getUsers(req, res) {
    return models.Auth.findAll()
      .then(res => res.json(res))
      .catch(error => console.log(error))
  }
}