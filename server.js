const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const auth = require('./auth');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const keys = require('./key')
const authCheck = require('./utils/authCheck')
const passport = require('passport')
const cookieSession =  require('cookie-session')
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000;
app.prepare().then(() => {
    
    const server  =express();
    server.use(cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }));

    // connect to mongodb
    mongoose.connect(keys.mongoURI, () => {
        console.log('connected to mongodb');
    });
    // initialize passport
    server.use(passport.initialize());
    server.use(passport.session());
    server.use('/api', auth)
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
    passport.deserializeUser(function(user, done) {
    done(null, user);
    });

    server.get('/', (req, res, next)=>{
        //User is not Logged in
        if(!req.user){
            handle(req,res)
        }
        //If user is logged in
        else{
            res.redirect('/homepage')
        }
    })

    server.get('/homepage', authCheck, (req, res, next)=>{
        res.user = req.user
        handle(req, res)
    })
    server.use((req, res) => {
        return handle(req, res)
    })

    server.listen(PORT, ()=> console.log('Server is running on ', PORT))
})