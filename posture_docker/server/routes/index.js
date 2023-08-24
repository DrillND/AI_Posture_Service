const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', function(req, res) {
    //userID를 view에 같이 넘겨주는 기능
    let userId = null;
    if (req.session.passport != undefined) {
        userId = req.session.passport.user.user;
    }
    res.render('index', {userId: userId}); //userID view에 넘겨줌
});

module.exports = router;