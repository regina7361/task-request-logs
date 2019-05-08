let connection = require("./connection")

let orm = {

    //selectAll()
    selectAllBoard: function (db, callback) {
        connection.query('SELECT * FROM ' + db + ";", function (err, result) 
        {
            if (err) throw err;
            //console.log("orm", result)
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
    //selectAll()
    selectAllTask: function (db, callback) {
        connection.query('SELECT * FROM ' + db + ";", function (err, result) 
        {
            if (err) throw err;
            //console.log("orm", result)
            callback (result);
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