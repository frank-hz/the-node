const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.ejs');
});
router.get('/fileman', (req,res) => {
    res.render('fileman/index.ejs');
});

module.exports = router;