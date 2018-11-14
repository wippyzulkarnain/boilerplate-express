const models = require("../models");

exports.getAll = (req, res) => {
  models.products
    .findAll()
    .then(products => res.send(products))
    .catch(err => res.send(err));
};

exports.post = (req, res) => {
  console.log(req.body);
  models.products
    .create(req.body)
    .then(product =>
      res.send({
        message: "insert data success",
        data: product
      })
    )
    .catch(err => res.send(err));
};
exports.deleteOne = (req, res) => {
  models.products
    .findOne({ where: { id: req.params.id } })
    .then(product => {
      product
        .destroy()
        .then(result => res.send("success"))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.deleteAll = (req, res) => {
  models.products
    .destroy({ where: {}, truncate: true })
    .then(result => res.send("success"))
    .catch(err => res.send(err));
};

exports.search = (req, res) => {
  console.log(req.query)
  models.products.findAll({ where: req.query })
      .then(products => res.send(products))
      .catch(err => res.send(err))
}

exports.update = (req, res) => {
  models.products.update(req.body, {
      where: {
          id: req.params.id
      }
  }).then(result => res.send(result))
      .catch(err => res.send(err))
}

