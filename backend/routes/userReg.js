const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userReg');

fetch('https://www.Groupmainia.com')
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      
      }).catch(e => {
      console.log(e);
      });

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;