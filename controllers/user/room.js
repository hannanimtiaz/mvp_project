const ProjectModel = require('../../models/project')
const RoomModel = require('../../models/room')

exports.createRoom = async function(req, res){
    let {name, project_id} = req.body
    console.log('name: ', name);
    console.log('project_id: ', project_id);

    let room = await RoomModel.create({name})
    console.log('room: ', room);
    let project = await ProjectModel.findById(project_id)
    
    project.room_ids.push(room._id)
    console.log('project: ', project);
    project.save()
     res.json({
         status:'success',
         msg:'Room Created'
     });
}