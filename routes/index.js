const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
});

router.get('/myName', (req, res) => {
  const name = req.cookies.username;
  if (name) {
  res.render('myName', {name});
} else {
  res.redirect('/trackName');
}
});



router.get('/trackName', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/myName');
  } else {
      res.render('trackname');
  }


});

router.post('/track', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/myName');
});




module.exports = router;
