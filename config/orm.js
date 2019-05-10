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

    //selectAll()
    selectList: function (board, callback) {
        connection.query('SELECT * FROM lists WHERE board_name = "' + board +'";', function (err, result) 
        {
            if (err) throw err;
            callback (result);
        });
    },

    //selectAll()
    selectTask: function (board, callback) {
        connection.query('SELECT * FROM tasks WHERE board_name = "' + board +'";', function (err, result) 
        {
            if (err) throw err;
            callback (result);
        });
    },

    //insertOne()
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
    //insertOne()
    insertList (db, list, board_name, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {   
            lists: list,
            board_name: board_name,
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    //insertOne()
    insertTask: function (db, task, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {
            task: task,
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    
};

module.exports = orm;