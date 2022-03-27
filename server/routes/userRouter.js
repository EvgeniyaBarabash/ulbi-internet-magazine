const Router = require("express");
const router = new Router();
const userController = require('../controllers/userCpontroller');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', (req, res) => {
    res.json({ message: "All working" })
})

module.exports = router