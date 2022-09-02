const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/signUp');

fetch('https//localhost:3000/api/signUp')
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