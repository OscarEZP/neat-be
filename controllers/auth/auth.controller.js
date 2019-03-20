const models = require('../../models/index');

module.exports = {
  subscribe(req, res) {
    return models.Auth.create(req.body)
      .then(resp => res.json(resp))
      .catch(error => console.log(error))
  }
}