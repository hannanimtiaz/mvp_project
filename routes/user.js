var express = require('express');
var router = express.Router();


const { getHome, projectController, roomController, productController } = require('../controllers/user')


router.get('/', getHome);

router.get('/projects', projectController.getProjects)

router.get('/createProject', projectController.getCreateProject)

router.post('/createProject', projectController.postCreateProject)

router.post('/createRoom', roomController.createRoom)


router.post('/addProductToRoom', roomController.addProductToRoom)

router.post('/deleteRoom', roomController.deleteRoom)

router.get('/projectPage/:project_id', projectController.getProjectPage)

router.get('/updateProject/:project_id', projectController.getUpdateProject)

router.post('/updateProject', projectController.postUpdateProject)

router.post('/deleteProject', projectController.postDeleteProject)

router.get('/products', productController.getProducts)


module.exports = router