var express = require('express');
var router = express.Router();


const { getHome, projectController, roomController } = require('../controllers/user')


router.get('/', getHome);

router.get('/projects', projectController.getProjects)

router.get('/createProject', projectController.getCreateProject)

router.post('/createProject', projectController.postCreateProject)

router.post('/createRoom', roomController.createRoom)

router.get('/projectPage/:project_id', projectController.getProjectPage)

router.get('/updateProject/:project_id', projectController.getUpdateProject)

router.post('/updateProject', projectController.postUpdateProject)

router.post('/deleteProject', projectController.postDeleteProject)



module.exports = router