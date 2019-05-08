let orm = require("../config/orm")

let board = {

    selectAll: function (callback) {
        orm.selectAllBoard("board_name",function(res){
            callback(res);
        });
    },
    insertOne: function (board_name, callback) {
        orm.insertBorad("board_name", board_name, function(res){
            callback(res);
        });
    },
}

module.exports = board;