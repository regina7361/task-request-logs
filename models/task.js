let orm = require("../config/orm")

let task = {

    selectTask: function (board, callback) {
        orm.selectTask(board,function(res){
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