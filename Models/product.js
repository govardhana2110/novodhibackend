var db = require('../dbConnection'); //reference of dbconnection.js file

var Product = {

    getAllProduct: function (callback) {

        return db.query('select * from product', callback);
    },
    getProduct: function (Id,callback) {

        return db.query('select * from product where pro_id=?',[Id], callback);
    },
    addProduct: function (product, callback) {
        return db.query('insert into product values(?,?,?,?,?,?,?)', [product.pro_id,product.pro_name,product.pro_price,product.pro_dec,product.pro_qty,product.pro_mfg,product.pro_img], callback);
    },
    deleteProduct: function (Id, callback) {
        return db.query('delete from product where pro_id=?', [Id], callback);
    },
    updateProduct: function (Id, product, callback) {
        return db.query('update product set pro_name=?,pro_price=?,pro_dec=?,pro_qty=?,pro_mfg=?,pro_img=? where  pro_id=?', [product.pro_name,product.pro_price,product.pro_dec,product.pro_qty,product.pro_mfg,product.pro_img ,Id], callback);
    }
};

module.exports = Product;
