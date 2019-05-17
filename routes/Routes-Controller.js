const express = require('express'); 
const router = express.Router();
const board = require("../models/board");
const list = require("../models/list");
const task = require("../models/task");

//Index Redirect
router.get('/', function(req, res) {
    res.redirect('/home');
});

//Index Page
router.get('/home', function(req,res){
    board.selectAll(function(data) {
        boardhbsObject = {boards: data};
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
        listData = data;
        let count = 0;
        if (listData.length > 0) {
            for (let i = 0; i < listData.length; i++) {
                task.selectTask (board, listData[i].lists, function (data){
                    taskData = data;
                    let listTaskData = {
                        boardName: board,
                        task_type: listData[i].lists,
                        tasks: taskData
                    };
                    taskArray.push(listTaskData);
                    count++;
                    if(count === listData.length) {
                        hbsOjectCompile();
                    };
                });
            };
        } else {
            hbsOjectCompile();
        }
    });

    function hbsOjectCompile () {
        
        hbsObject = {
            boardName: board,
            data: taskArray
        };
        console.log(hbsOjectCompile);
        res.render ('index', hbsObject);
    };
});

//Add New List
router.post('/newList/:board', function (req, res){
    let boardName = req.params.board;

    let listName = req.body.list_name;

    list.insertList(boardName, listName, function(){
        res.redirect(`/board/${boardName}`)
    });
});

// Add New Task
router.post('/newTask/:board', function (req, res){
    let boardName = req.params.board;
    let listName = req.body.task_type;
    console.log("Body", req.body);
    let task_priority = 1;
    let task_title = req.body.task_title;
    let task_dueDate = req.body.task_dueDate;
    let assigned_to = req.body.assigned_to;
    let task_description = req.body.task_description;

    task.insertTask(boardName, listName, task_title, task_priority, task_dueDate, assigned_to, task_description, function(){
        res.redirect(`/board/${boardName}`)
    });
});

// Update Task
router.post('/updateTask/:board/:list/:task_title', function (req, res){
    let boardName = req.params.board;
    let listName = req.params.list;

    let task_title = req.params.task_title;
    let newListName = req.body.newListName;

    task.updateTask(boardName, listName, task_title, newListName, function (){
        res.redirect(`/board/${boardName}`);
    });
});

// Delete Task
router.post('/delete/:board/:id', function (req, res){
    let boardName = req.params.board
    let id = req.params.id;
    task.deleteTask(id, function (){
        res.redirect(`/board/${boardName}`);
    });
});


module.exports = router;