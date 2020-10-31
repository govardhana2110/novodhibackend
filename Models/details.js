var db = require('../dbConnection'); //reference of dbconnection.js file

var Details = {

    getAllDetails: function (callback) {

        return db.query('select * from details', callback);
    },
    getDetails: function (Id,callback) {

        return db.query('select * from details where password=?',[Id], callback);
    },
    addDetails: function (details, callback) {
        return db.query('insert into details values(?,?,?,?)', [details.user_email,details.user_name,details.password,details.user_phonenumber], callback);
    },
    deleteDetails: function (Id, callback) {
        return db.query('delete from details where password=?', [Id], callback);
    },
    updateDetails: function (Id, details, callback) {
        return db.query('update details set user_email=?,user_name=?,user_phonenumber=? where password=?', [details.user_email,details.user_name,details.user_phonenumber, Id], callback);
    }
};

module.exports = Details;