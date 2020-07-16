const {userService} = require('../../service');
const {userValidator} = require('../../validators')
const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid').v1();

module.exports = async (req, res, next) => {
  try {
    const userToCreate = req.body ;

    const [photo] = req.photos;

    const photoDir = `users/photos`;
    const photoExtensive = photo.name.split('.').pop();
    const photoName = `${uuid}.${photoExtensive}`;
    const photoPath = `users/photos/${photoName}`;
    // const userrr = await userService.createUser(userToCreate);

    await fs.mkdir(path.resolve(process.cwd(),'public', photoDir), {recursive: true});
    await photo.mv(path.resolve(process.cwd(),'public',photoDir,photoName));

    // res.json(userToCreate)
    res.json(`fileSize:${photo.size}`,)

      //TODO some problem with sort string


    res.json(userToCreate)
  }
  catch(e)
  {
    res.status(400).json(e.message);
  }

}
