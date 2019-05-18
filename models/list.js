let orm = require("../config/orm")

let list = {

    selectList: function (board, callback) {
        //console.log ("list", board);
        orm.selectList(board ,function(res){
            callback(res);
        });
    },
    insertList: function (boardName, listName, callback) {
        orm.insertList("lists",boardName, listName, function(res){
            callback(res);
        });
    },
}

module.exports = list;