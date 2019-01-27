const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const secRoutes = require('./routes/getData');


app.use(mainRoutes);
app.use('/getData', secRoutes);



app.use((req, res, next) => {
  const err = Error('Oh ,no');
  err.status = 500;
  next(err);
});



app.use((req,res,next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});



app.listen(3000, ()=> {
  console.log('the app is runingon local 3000');
});