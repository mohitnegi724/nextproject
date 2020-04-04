const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: '931658461634-fdqt136chusiak4vftg4u2h578csr87k.apps.googleusercontent.com',
    clientSecret: '8hKxFAC9KtP-uogpXkDy6NVe',
    callbackURL: "/api/auth/google/callback"
    },
    function(token, tokenSecret, profile, done) {
    console.log('profile ', profile)
    }
));

router.get('/auth/google', passport.authenticate('google', {scope:['profile', 'email']}));

router.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
    console.log("---------------------------------------------------------------")
    res.redirect('/about')
})

module.exports = router;