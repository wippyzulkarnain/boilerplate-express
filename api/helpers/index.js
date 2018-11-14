const jwt = require("jsonwebtoken");
const models = require("../models");

module.exports.isAuthenticated = (req, res, next) => {
  console.log("this is middleware");
  //check token
  const token =
    req.body.token ||
    req.query.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]) ||
    undefined;
  if (token === undefined) {
    return res.send("token not found");
  }
  //decode token
  try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
   //find token
   models.accounts
   .findOne({ where: { id: decoded.id } })
   .then(account => {
     if (account === null) {
       return res.send("account not found");
     }
     req.decoded = decoded;
     next();
   })
   .catch(err => res.send(err));
  } catch(err){
      res.send("token not valid")
  }
 
};
