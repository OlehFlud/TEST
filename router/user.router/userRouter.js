const router = require('express').Router();
const {userController} = require('../../controllers');
const {user: userMiddleware, file: filesMiddleware} = require('../../middleware');

router.post('/submit-data',
  userMiddleware.checkUserMiddleware,
  // filesMiddleware.checkCountMiddleware,
  filesMiddleware.checkFileMiddleware,
  userController.createUser);

module.exports = router;
