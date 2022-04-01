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

router.get('/', userController.getAll);

router.get('/:username', userController.getUser);

router.post('/', userController.create);

module.exports = router;

