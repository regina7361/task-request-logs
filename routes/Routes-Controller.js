const express = require('express'); 
const router = express.Router();
const board = require("../models/board");
let task = require("../models/task");

//Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

//Index Page
router.get('/index', function(req,res){
    let boardArray = [];

    board.selectAll(function(data){
        boardhbsObject = {boards: data};
        //res.render("index", boardhbsObject); 
        let taskhbsObject ={};
        for (let i = 0; i < data.length; i++) {
            boardArray.push(data[i].board_name);
        }
        res.render("index", boardhbsObject); 
        displayTask ()

        function displayTask() {
            for (let i = 0; i < boardArray.length; i++) {
                task.selectAll(boardArray[i], function(data) {
                    if (data.length > 0) {
                        taskhbsObject = {[i]: data};
                        console.log (taskhbsObject);
                        res.render("index", taskhbsObject); 
                    }  
                });
            };
        };

        
    });

    
    


});

router.post('/newBoard', function(req, res){
    board.insertOne([req.body.board_name], function(){
        res.redirect('/')
    });
});

// router.post('/update/:id', function(req, res){
//     burger.updateOne([req.params.id], function(){
//         res.redirect('/')
//     });
// });




module.exports = router;
