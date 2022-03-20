const express = require("express");

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('We are home!');
});
router.get('/user', (req,res, next)=>{
    res.send('this is a user');
});
router.post
router.put
router.delete

module.exports = router;