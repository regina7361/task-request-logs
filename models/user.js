let orm = require("../config/orm")

let user = {

    //Verify Username
    checkUser: function (userName, callback) {
        orm.checkUser("user", userName, function(res){
            callback(res);
        });
    },

    insertUser: function (userName, userPassword, callback) {
        console.log ("model:", userName, userPassword);
        orm.insertUser("user", userName, userPassword, function(res){
            callback(res);
        });
    },
    // insertBorad: function (board_name, callback) {
    //     orm.insertBorad("boards", board_name, function(res){
    //         callback(res);
    //     });
    // },
}

module.exports = user;