const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const upload = require('../config/multerConfig')

router.get('/' , controller.defaultController);
router.post('/todo' ,upload.single('img'), controller.addTodoController);
router.get('/edit/:id' , controller.editTodoController);
router.post('/update/:id', controller.updateTodoController)
router.get('/delete/:id', controller.deletedTodoController)

module.exports = router;