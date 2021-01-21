const ProjectModel = require('../../models/project');
const Room = require('../../models/room');
const RoomModel = require('../../models/room')

exports.createRoom = async function (req, res) {
    let { name, project_id } = req.body
    console.log('name: ', name);
    console.log('project_id: ', project_id);

    let room = await RoomModel.create({ name })
    console.log('room: ', room);
    let project = await ProjectModel.findById(project_id)

    project.room_ids.push(room._id)
    console.log('project: ', project);
    project.save()
    res.json({
        status: 'success',
        msg: 'Room Created'
    });
}
exports.deleteRoom = async function(req, res){
    let {room_id, project_id} = req.body
    console.log('project_id: ', project_id);
    console.log('room_id: ', room_id);
    let room = await RoomModel.findById(room_id)
    let project = await ProjectModel.findById(project_id)
    console.log('room: ', room);
    console.log('project: ', project);
    
    let index = project.room_ids.indexOf(room_id)
    console.log('index: ', index);
    console.log('project.room_ids: ', project.room_ids);
    project.room_ids.splice(index, 1)
    console.log('project.room_ids: ', project.room_ids);
     res.json({
         msg:"ok"
     });
}



exports.addProductToRoom = async function (req, res) {
    let { product_id, room_id } = req.body
    console.log('project_id: ', product_id);
    console.log('room_id: ', room_id);
    let room = await RoomModel.findById(room_id)
    if(room){
        room.product_ids.push(product_id)
        room.save()
        res.json({
            status: 'success',
            msg: 'Product Added'
        });
    }
    else{
        res.json({
            status: 'error',
            msg: 'Room not founds'
        });
    }

}