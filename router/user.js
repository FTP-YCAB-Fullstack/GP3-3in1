const router = require('express').Router();
const authController = require('./../controllers/authController')
const controller = require('./../controllers/userController')
const auth = require('./../middlewares/authMiddleware')

router
    .route('/')
    .get(auth.authentication, auth.authorization(['admin']), controller.getData)


router
    .route('/register')
    .post(authController.register)

router
    .route('/login')
    .post(authController.login)

module.exports = router;