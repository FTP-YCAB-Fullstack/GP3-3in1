const router = require('express').Router();
const authController = require('./../controller/authController')
const controller = require('./../controller/userController')
const auth = require('./../middleware/authMiddleware')

router
    .route('/')
    .get(auth.authentication, auth.authorization(['admin']),controller.getData)
    // auth.authentication, auth.authorization(['admin']),

router
    .route('/register')
    .post(authController.register)

router
    .route('/login')
    .post(authController.login)

module.exports = router;