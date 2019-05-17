const express = require('express'); 
const router = express.Router();
const board = require("../models/board");
const list = require("../models/list");
const task = require("../models/task");
const user = require("../models/user");

// router.get('*', function(req, res) {
//     res.send("404: There is not enough Felipe to go around!")
// });

//Index Redirect
router.get('/', function(req, res) {
    res.redirect('/login');
});

//Login Page
router.get('/login', function(req, res){
    res.render("login");
});

//Signup Page
router.get('/signUp', function(req, res){
    res.render("signup");
});

//Create User
router.post('/checkUserName', function(req, res){
    let userName = req.body.userName;
    user.checkUser(userName, function(data){
        if (data.length > 0) {
            res.redirect("/usernameInUse");
        } else {
            res.redirect('/password/' + userName);
        };
    });
});

//username in use 
router.get('/usernameInUse', function (req, res){
    res.render("usernameInUse");
})

//Password
router.get('/password/:username', function(req, res){
    let username = {username: req.params.username}
    res.render("confirmPassword", username)
});

//confirmPassword

router.post('/confirmPassword', function(req, res){
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    if (password === confirmPassword) {
        user.insertUser(confirmPassword, function(data){

        });
    }
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
router.post('/newTask/:board/:list', function (req, res){
    let boardName = req.params.board;
    let listName = req.params.list;

    let task_prioirty = 2;
    let task_title = req.body.task_title;
    let task_dueDate = req.body.task_dueDate;
    let assigned_to = req.body.assigned_to;
    let task_description = req.body.task_description;

    task.insertTask(boardName, listName, task_title, task_prioirty, task_dueDate, assigned_to, task_description, function(){
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