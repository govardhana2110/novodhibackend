var express = require('express');
var router = express.Router();
var product = require('../Models/product');


router.get('/:Id?', function (req, res, next) {
    if(req.params.Id){
product.getProduct(req.params.Id,function(err,rows){
    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
});
    }
    else{
    product.getAllProduct(function (err, rows) {
    
    
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

    product.addProduct(req.body, function (err, rows) {
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

    product.deleteProduct(req.params.Id, function (err, rows) {
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

    product.updateProduct(req.params.Id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;