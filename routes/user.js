// const express = require("express");

// const router = express.Router();

// router.get('/', (req, res, next)=>{
//     res.send('We are home!');
// });
// router.get('/user', (req,res, next)=>{
//     res.send('this is a user');
// });
// router.post
// router.put
// router.delete

// module.exports = router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const adminuserController = require('../controllers/admin-user')

router.get('/', adminuserController.getAll);

router.get('/:username', adminuserController.getUser);

router.post('/create', adminuserController.create);

router.post('/register', userController.signUp);

router.post('/login', userController.logIn);

router.get('/profile', userController.userProfile);

router.get('/logout', userController.logOut);

module.exports = router;

