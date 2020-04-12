const authCheck=(req, res, next)=>{
    console.log(req.user)
    if(!req.user){
        res.redirect('/')
    }else{
        req.author = req.user._id
        next()
    }
}

module.exports = authCheck