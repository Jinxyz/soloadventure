const express = require('express');
const router = express.Router();
const { pool, query } = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM story'

  pool.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200, 
      result: result
    })
  });
});

router.get('/:id', async function (req, res, next) {
  try {
    const story = await query(
      'SELECT * FROM story WHERE id = ?',
      req.params.id
    );
    
    const links = await query(
      'SELECT * FROM links WHERE story_id = ?',
      req.params.id
    );

    res.render('story',{
      status: 200,
      story: story,
      links: links
    });

  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;