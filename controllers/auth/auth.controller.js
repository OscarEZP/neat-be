const models = require('../../models/index');

module.exports = {

  subscribe(req, res) {
    console.log(req.body);
    return models.userType.findAll({
      where: {
        slug: req.body.type
      },
      attributes: ['id', 'slug', 'name']
    })
    .then((userType) => {
      return models.Auth.create({
        email: req.body.email,
        password: req.body.password,
        user_type_id: userType[0].id 
        })
    })
      .then(resp => res.json(resp))
      .catch(error => {
        console.log(error.errors);
        error.errors.map((errItem) => {
          errItem.message = error.message;
        });

        res.status(400).send(error);
      })
  },

  getUsers(req, res) {
    return models.Auth.findAll()
      .then(res => res.json(res))
      .catch(error => console.log(error))
  }
}