const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user-model');
const Task = require('./models/task-model');
const authCheck = require('./utils/authCheck');
const keys  = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: "/api/auth/google/redirect",
        clientID: keys.clientID,
        clientSecret: keys.clientSecret
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
                    done(null, newUser);
                }).catch(err=>{
                    console.log(err)
                });
            }
        });
    })
);


router.get('/auth/google', (req, res, next)=>{
    if(req.user){
        res.redirect('/')
    }else{
        next()
    }
}, passport.authenticate('google', {scope:['profile', 'email']}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

router.get('/profile', authCheck, (req, res)=>{
    res.send(req.user)
})

router.post('/logout', authCheck, (req, res)=>{
    req.logout();
    res.send({status: 200})
})

router.get('/tasks', authCheck, (req, res)=>{
    Task.find({author: req.user.id}).then(tasks=>res.send(tasks)).catch(err=>res.send(err))
})

router.post('/createTask', authCheck, async (req, res)=>{
    req.body.author = req.user._id
    let createdUser = await Task.create(req.body)
    res.send(createdUser)
})

router.post('/updateTask', authCheck, async(req, res)=>{
    Task.findByIdAndUpdate(id, {$set: req.body}, {new: true})
    .then(task=>{
        res.send(task)
    })
    .catch(err=> console.log(err))
})

router.post('/deleteTask', authCheck, async(req, res)=>{
    Task.findByIdAndDelete(id)
    .then(()=>{
        res.redirect('/api/tasks')
    })
    .catch(err=> console.log(err))
})

module.exports = router;
