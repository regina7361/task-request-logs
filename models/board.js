let orm = require("../config/orm")

let board = {

    selectAll: function (callback) {
        orm.selectAll("boards",function(res){
            callback(res);
        });
    },
    insertBorad: function (board_name, callback) {
        orm.insertBorad("boards", board_name, function(res){
            callback(res);
        });
    },
}

module.exports = board;