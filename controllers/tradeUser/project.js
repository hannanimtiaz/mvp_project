const ProjectModel = require('../../models/project')


exports.getProjects = async function (req, res) {
    let projects = await ProjectModel.find({ isRetail: true })
    res.render('projects', { projects })
}

exports.createProjects = async function (req, res) {
    let { name, style } = req.body
    let project = ProjectModel.create({ name, style })

    if (project) {
        res.json({
            status: "Success",
            msg: "Project Created",
            project: project
        });
    }
    else {
        res.json({
            status: "Error",
            msg: "Project not create. Try again"
        });
    }
}