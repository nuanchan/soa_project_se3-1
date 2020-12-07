var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */

router.get('/',async function(req, res, next) {
  const result = await db.getsum();
  const result1 = await db.getmap();
  console.log(result.rows);
  console.log(result1.rows);
  res.render('index', { resultData: result.rows, mapData: result1.rows });
});

router.get('/table',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('table', { resultData: result.rows });
});

router.get('/table-Confirmed-only',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('table-Confirmed-only', { resultData: result.rows });
});

router.get('/table-Death-only',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('table-Death-only', { resultData: result.rows });
});

router.get('/table-Recovered-only',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('table-Recovered-only', { resultData: result.rows });
});

module.exports = router;
