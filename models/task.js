let orm = require("../config/orm")

let task = {

    selectTask: function (board, list, callback) {
        orm.selectTask(board, list, function(res){

            callback(res);
        });
    },


    insertTask: function (boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description, callback) {
        //console.log ("Task Model:",boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description);
        orm.insertTask("tasks", boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description, function(res){
            callback(res);
        });
    },

    updateTask: function (boardName, listName, task_title, newListName, callback) {

        console.log ("model:", boardName, listName,task_title, newListName);
        orm.updateTask("tasks", boardName, listName, task_title, newListName, function(res){
            callback(res);
        });
    }
}

module.exports = task;