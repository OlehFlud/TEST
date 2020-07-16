const {ErrorHandler} = require("../../error");

module.exports = (req, res, next) => {
  const photo = req.photos;

  if (photo.length > 1) {
    new ErrorHandler(`You can upload just one photo`)
  }

  next()
};
