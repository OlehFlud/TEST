const {FILES_PARAMS_CHECK} = require('../../constant');

module.exports = (req, res, next) => {

  req.photos = [];

  if (!req.files) {
    next()
  }


  const files = Object.values(req.files);

  for (let i = 0; i < files.length; i++) {
    const {mimetype, size, name} = files[i];

    if (FILES_PARAMS_CHECK.PHOTO_MIMETYPES.includes(mimetype)) {

      if (FILES_PARAMS_CHECK.MAX_PHOTO_SIZE < size) {
        throw new Error(
          `Max file size is ${FILES_PARAMS_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)}mb`,)
      }

      req.photos.push(files[i])

    }
    else {
      throw new Error (`File ${name} is not valid`)
    }
  }
  next()
};
