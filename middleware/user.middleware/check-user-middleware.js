const {ErrorHandler} = require("../../error");

module.exports = (req, res, next) => {
  const { aboutMe } = req.body;

  if (aboutMe.match(/z/)) {
    throw new ErrorHandler('z is forbidden',400)
  }
  next()
};
