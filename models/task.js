let orm = require("../config/orm")

let task = {

    selectTask: function (board, list, callback) {
        orm.selectTask(board, list, function(res){

            callback(res);
        });
    },


    insertTask: function (boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description, callback) {
        orm.insertTask("tasks", boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description, function(res){
            callback(res);
        });
    },

    updateTask: function (boardName, listName, task_title, newListName, callback) {
        orm.updateTask("tasks", boardName, listName, task_title, newListName, function(res){
            callback(res);
        });
    },

    deleteTask: function (id, callback) {
        orm.deleteTask("tasks", id, function(res){
            callback(res);
        });
    }
}


module.exports = task;