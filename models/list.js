let orm = require("../config/orm")

let list = {

    selectList: function (board, callback) {
        //console.log ("list", board);
        orm.selectList(board ,function(res){
            callback(res);
        });
    },
    insertList: function (board_name, callback) {
        orm.insertList("boards", board_name, function(res){
            callback(res);
        });
    },
}

module.exports = list;