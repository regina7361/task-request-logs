const express = require('express'); 
const router = express.Router();
const board = require("../models/board");
const list = require("../models/list");
const task = require("../models/task");

//Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

//Index Page
router.get('/index', function(req,res){
    board.selectAll(function(data) {
        boardhbsObject = {boards: data};
        console.log (boardhbsObject);
        res.render("landing", boardhbsObject);
    });
});

//Add New Board
router.post('/newBoard', function(req, res){
    board.insertBorad([req.body.board_name], function(){
        res.redirect('/')
    });
});

//Board Pages
router.get('/board/:board_name', function (req,res){
    let board = req.params.board_name;
    let taskArray = [];

    list.selectList (board, function (data){
        listData = data
        //console.log (listData)
        for (let i = 0; i < listData.length; i++) {
            task.selectTask (board, listData[i].lists, function (data){
                taskData = data;
                //console.log (taskData)
                let listTaskData = {
                    task_type: listData[i].lists,
                    tasks: taskData
                }
                taskArray.push(listTaskData);
                //console.log ("For Loop:", listTaskData);
            });
        }
        delaytimer();
    });
    
    function delaytimer () {
        setTimeout(hbsOjectCompile, 1000);
    }

    function hbsOjectCompile () {
        
        hbsObject = {
            boardName: board,
            data: taskArray
        }
        console.log (taskArray);
        res.render ('index', hbsObject);
    };
});

//Add New List

router.post('/newlist/:board', function (req, res){
    let boardName = req.params.board;
    let listName = req.body.list_name;
    list.insertList(boardName, listName, function(){
        res.redirect(`/board/${boardName}`)
    });
});

// router.post('/update/:id', function(req, res){
//     burger.updateOne([req.params.id], function(){
//         res.redirect('/')
//     });
// });
 
module.exports = router;