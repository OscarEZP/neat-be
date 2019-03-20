const auth = require('../../models').auth;

module.exports = {
  subscribe(req, res) {
    console.log(req.body, 'body');
    return auth.create({
      email: req.body.email
    })
    .then((emailSubscribe) => {
      res.status(200).send(emailSubscribe) 
    })
    .cath(error => res.status(400).send(error))
  }
}