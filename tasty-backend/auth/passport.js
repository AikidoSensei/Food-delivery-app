const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const passport = require('passport');

const GOOGLE_CLIENT_ID =
  '1068800676445-snmtnde1n0ie2do9qatl3p9om7k3tp4i.apps.googleusercontent.com'

const GOOGLE_CLIENT_SECRET = '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'

passport.use(
  new GoogleStrategy(
    {
      clientID:GOOGLE_CLIENT_ID,
      clientSecret:GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
    }
  )
)

passport.serializeUser((user, done)=>{
 done(null, user)
})
passport.deserializeUser((user, done)=>{
 done(null, user)
})