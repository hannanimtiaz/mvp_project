var express = require('express');
var router = express.Router();


const { getHome, projectController } = require('../controllers/retailUser')


router.get('/', getHome);

router.get('/projects', projectController.getProjects)

router.get('/createProject', projectController.getCreateProject)

router.post('/createProject', projectController.postCreateProject)

router.get('/updateProject/:project_id', projectController.getUpdateProject)

router.post('/updateProject', projectController.postUpdateProject)

router.post('/deleteProject', projectController.postDeleteProject)





module.exports = router