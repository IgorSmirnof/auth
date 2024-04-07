const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/signup', [
    check('email', "Field не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть меньше 4 и больше 10 символов").isLength({min:4, max:10})
], controller.registration)
router.post('/signin', controller.login)
router.get('/users/me', controller.getUsers)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)
router.post('/*', controller.any)


module.exports = router
