const express = require('express');
const router = express.Router();


// router.get('/', (req, res) => {
//   const word = 'Lack of Parameter';
//   res.render('getdata', {word});
//   const {number} = req.query;
//   const {id} = req.params;
//   console.log(number, id);
// });



router.get('', (req, res) => {
   const {number} = req.query;
   const {id} = req.params;


   var word = 'Lack of Parameter';
  //

  // const templateData = {text, word};
  //
  // res.render('getdata', templateData);

  const n = parseInt(number);



  if (isNaN(n)) {
    const word = 'Wrong Parameter';
    return res.render('getdata', {word});
  } else {

  if (typeof n == 'number'){
    const words = n+1;
    var word = (n*words/2);
    return res.render('getdata', {word});
    }
  }

res.render('getdata', {word});

});









module.exports = router;
