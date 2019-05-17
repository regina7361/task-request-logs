let connection = require("./connection")

let orm = {

    //selectAll()
    selectAll: function (table, callback) {
        connection.query('SELECT * FROM ' + table + ";", function (err, result) 
        {
            if (err) throw err;
            callback (result);
        });
    },

    //selectAllList()
    selectList: function (board, callback) {
        connection.query('SELECT * FROM lists WHERE board_name = "' + board +'";', function (err, result) 
        {
            if (err) throw err;
            callback (result);
        });
    },

    //selectAllTask()
    selectTask: function (board, list, callback) {
        connection.query('SELECT * FROM tasks WHERE board_name = "' + board +'" AND task_type = "' + list + '";', function (err, result) 
        {
            if (err) throw err;
            callback (result);
        });
    },

    //insertBoard()
    insertBorad: function (db, board_name, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {
            board_name: board_name,
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    //insertList()
    insertList (db, boardName, listName, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {   
            board_name: boardName,
            lists: listName
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    //insertTask()
    insertTask: function (db, boardName, listName, task_title, task_prioirty, due_date, assigned_to, task_description, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?, created_date = UTC_TIMESTAMP();', 
        {
            task_type:listName,
            task_title: task_title,
            task_priority: task_prioirty,
            due_date: due_date,
            assigned_to: assigned_to,
            task_description: task_description,
            board_name: boardName
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },

    //updateTask()
    updateTask: function (db, boardName, listName, task_title, newListName, callback) {

        connection.query('UPDATE ' + db + ' SET ? WHERE ? AND ? AND ?;', 
        [{
            task_type: newListName,
        },{
            task_type:listName
        },{
            task_title: task_title
        },{
            board_name: boardName
        }],function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },

    //deleteTask()
    deleteTask: function (db, id, callback) {

        connection.query('DELETE FROM ' + db + ' WHERE ?;', 
        {
            id: id
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },

    //Verify Username()

    checkUser: function (db, userName, callback) {
        connection.query('SELECT * FROM ' + db + ' WHERE userName LIKE "' + userName + '";', 
        function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },

    //newUser()
    insertUser: function (db, userName, userPassword, callback) {

        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {
            userName: userName,
            userPassword: userPassword
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    
};

module.exports = orm;