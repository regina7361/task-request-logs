let orm = require("../config/orm")

let task = {

    selectAll: function (board_name, callback) {
        orm.selectAllTask(board_name,function(res){
            //console.log ('burger.js', res);
            callback(res);
        });
    },
    // insertOne: function (board_name, callback) {
    //     orm.insertOne(board_name, task, function(res){
    //         callback(res);
    //     });
    // },
    // updateOne: function (board_name, id, callback) {
    //     orm.updateOne(board_name, id, function(res){
    //         callback(res);
    //     });
    // }
}

module.exports = task;