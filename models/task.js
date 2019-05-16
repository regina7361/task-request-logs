let orm = require("../config/orm")

let task = {

    selectTask: function (board, list, callback) {
        orm.selectTask(board, list, function(res){

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