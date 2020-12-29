const ProjectModel = require('../../models/project')


exports.getProjects = async function (req, res) {
    let projects = await ProjectModel.find()
    console.log('projects: ', projects);
    if(!projects.length){
        projects= null
    }
    res.render('trade/projects', { projects })
}

exports.getCreateProject = function (req, res) {
    res.render('trade/createProject');
}

exports.postCreateProject = async function (req, res) {
    let { name, style } = req.body
    let project = ProjectModel.create({ name, style })

    if (project) {
        res.json({
            status: "success",
            msg: "Project Created",
            project: project
        });
    }
    else {
        res.json({
            status: "error",
            msg: "Project not created. Try again"
        });
    }
}

exports.getUpdateProject = async function (req, res) {
    let project_id = req.params.project_id

    let project = await ProjectModel.findById(project_id)

    res.render('trade/updateProject', {project});

}

exports.postUpdateProject = async function (req, res) {
    let { name, style, id } = req.body
    console.log('req.body: ', req.body);
    let project = await ProjectModel.findOne({ _id: id })

    if (project) {
        project.name = name
        project.style = style

        project.save()
        res.json({
            status: "success",
            msg: "Project Updated",
            project: project
        });
    }
    else {
        res.json({
            status: "error",
            msg: "Project not found. Try again"
        });
    }
}

exports.postDeleteProject = async function (req, res) {
    let{ id} = req.body
    console.log('req.body: ', req.body);
    console.log('id: ', id);
    let project = await ProjectModel.findOne({ _id: id })

    if (project) {
        project.remove()
        res.json({
            status: "success",
            msg: "Project Deleted",
            project: project
        });
    }
    else {
        res.json({
            status: "error",
            msg: "Project not found. Try again"
        });
    }
}