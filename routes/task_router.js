var express = require('express');
var router = express.Router();
var task = require('../Models/Task');


router.get('/:Id?', function (req, res, next) {
    if(req.params.Id){
task.getTask(req.params.Id,function(err,rows){
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
});
    }
    else{
    task.getAllTasks(function (err, rows) {
    
    
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
        
    });
}
    
     });
router.post('/', function (req, res, next) {

    task.addTask(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
//http://localhost:3000/tasks/1
router.delete('/:Id', function (req, res, next) {

    task.deleteTask(req.params.Id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/tasks/1
router.put('/:Id', function (req, res, next) {

    task.updateTask(req.params.Id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;