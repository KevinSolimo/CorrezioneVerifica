/*eslint-env node*/

var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'pug');
var country = require('countryjs');


app.get('/:numero', function (req, res) {
  var nationList = country.all();
  var numero = req.params.numero;
  res.render('es8',{nazioni:nationList, numero:parseInt(numero)});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});