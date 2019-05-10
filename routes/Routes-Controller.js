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
    
    list.selectList (board, function (data){
        listData = data
        //console.log (listData)
    });

    task.selectTask (board, function (data){
        taskData = data;
        //console.log (taskData)
        hbsOjectCompile();
    });
    
    function hbsOjectCompile () {
        hbsObject = {
            boardName: board,
            list: listData,
            task: taskData
        };
        console.log (hbsObject);
        res.render ('index', hbsObject);
    };
});

// //Index Page
// router.get('/index', function(req,res){
//     let boardArray = [];

//     board.selectAll(function(data){
//         boardhbsObject = {boards: data};
//         res.render("index", boardhbsObject); 
//         for (let i = 0; i < data.length; i++) {
//             boardArray.push(data[i].board_name);
//         } 
//         displayTask ()
        
//     });

//     function displayTask() {
//         for (let i = 0; i < boardArray.length; i++) {
//             task.selectAll(boardArray[i], function(data) {
//                 if (data.length > 0) {
//                     taskhbsObject = {task: data};
//                     console.log (taskhbsObject);
//                     //res.render("index", taskhbsObject); 
//                 }  
//             });
//         };
//     };
// });

























// //Index Redirect
// router.get('/', function(req, res) {
//     res.redirect('/index');
// });

// //Index Page
// router.get('/index', function(req,res){
//     let boardhbsObject = {}; 
//     let taskhbsObject = {};

//     board.selectAll(function(data){
//         boardhbsObject = data;
//         console.log (boardhbsObject);
//     });

//     board.selectAll(function(data){
//         taskhbsObject = data;
//         console.log (taskhbsObject);
//         compile()
//     });

//     function compile() {
//     let totalhbsObject = {
//         obj1: boardhbsObject,
//         obj2: taskhbsObject,
//     };
//     console.log (totalhbsObject);

//     res.render ("index", totalhbsObject);
//     };
// });

// router.get('/index/test', function(req,res){
//     console.log ("Start of the Quest")

//     function t (){
//         console.log ("Function T")
//         answer = 10 + 10;
//         return answer;
//     }
    
//     const Name = async () => {
//         console.log ("Async Function")
//         console.log ("1");
//         let response = await t()
//         console.log ("2")
//         console.log(response)
//     }
//     Name();
//     console.log ("End of the quest")
// });

// //Index Page
// router.get('/index', function(req,res){
//     board.selectAll(function(data){
//         boardhbsObject = {board: data};
//         console.log (boardhbsObject);
//         res.render ("index", boardhbsObject);
//     });
// });

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