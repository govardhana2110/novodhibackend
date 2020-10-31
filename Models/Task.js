var db = require('../dbConnection'); //reference of dbconnection.js file

var Task = {

    getAllTasks: function (callback) {

        return db.query('select * from task', callback);
    },
    getTask: function (Id,callback) {

        return db.query('select * from task where id=?',[Id], callback);
    },
    addTask: function (task, callback) {
        return db.query('insert into task values(?,?,?)', [task.id, task.title, task.status], callback);
    },
    deleteTask: function (Id, callback) {
        return db.query('delete from task where id=?', [Id], callback);
    },
    updateTask: function (Id, task, callback) {
        return db.query('update task set title=?,status=? where id=?', [task.title, task.status, Id], callback);
    }
};

module.exports = Task;