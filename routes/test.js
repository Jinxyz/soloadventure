const express = require('express');
const router = express.Router();
const { pool, query } = require('../models/db');

router.get('/:id', function (req, res, next) {
  const sql = 'SELECT * FROM meeps WHERE id = ?';

  pool.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      id: req.params.id,
      result: result
    });
  });
});

module.exports = router;