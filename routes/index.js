const express = require('express');
const pool = require('../models/db');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM users';

  pool.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200, 
      result: result
    })
  });
});

router.get('/:id', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

module.exports = router;
