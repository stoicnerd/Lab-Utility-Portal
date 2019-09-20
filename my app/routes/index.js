var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);router.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);

module.exports = router;
