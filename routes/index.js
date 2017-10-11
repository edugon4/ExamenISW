var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var examen = {
  nombre:"Eduardo",
  cuenta:"1501199419367",
  correo:"correo"
}

router.get('/1501199419367', function(req, res, next) {
  console.log(req.params);
  res.json(examen);
});


module.exports = router;
