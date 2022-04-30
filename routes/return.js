var express = require('express');
var router = express.Router();
const db = require('monk')('localhost:27017/mydb')
const { check , validationResult } = require('express-validator');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('return');
});
router.post('/', [

  ], function(req,res,next) { 
    const answer = validationResult(req);
    if(!answer.isEmpty()) {
      res.location('/borrow');
      res.redirect('/borrow');
    }
    else{
      var ct=db.get('user')
      ct.find({}, 'ID').then((docs) => {
        // only the name field will be selected
      })

     /* ct.findOne({ID:req.body.ID}, 'ID').then((doc) => {
        console.log(doc);
      });*/
    }
});
module.exports = router;