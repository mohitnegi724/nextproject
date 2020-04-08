const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user-model');
const authCheck  = require('./utils/authCheck');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: "/api/auth/google/redirect",
        clientID: '931658461634-fdqt136chusiak4vftg4u2h578csr87k.apps.googleusercontent.com',
        clientSecret: '8hKxFAC9KtP-uogpXkDy6NVe'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    profilePicture: profile.photos[0].value,
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                }).catch(err=>{
                    console.log(err)
                });
            }
        });
    })
);


router.get('/auth/google', passport.authenticate('google', {scope:['profile', 'email']}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log('Authentication request')
    res.redirect('/');
});

router.get('/profile', (req, res)=>{
    console.log('Profile request')
    res.send(req.user)
})

router.post('/logout', (req, res)=>{
    req.logout()
    res.redirect('/')

})

module.exports = router;
