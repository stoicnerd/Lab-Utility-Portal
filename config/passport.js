var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;passport.serializeUser(function(user, done) {
 done(null, user);
});passport.deserializeUser(function(user, done) {
 done(null, user);
});passport.use(
 new GoogleStrategy(
  {
   clientID: "302836781526-mmeugfj68kvp7ar9nmk2761ido2ie0bd.apps.googleusercontent.com",
   clientSecret: "LQ2mqg06Qwjo34nSIiilXomx",
   callbackURL: "http://localhost:4500/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);
