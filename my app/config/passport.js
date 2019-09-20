var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "55918411552-o87q5jvqa0dgg2von99oggoomuvn68eb.apps.googleusercontent.com",
      clientSecret: "hI0wiGHrMHz6B4CqRbGpJl_a",
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
