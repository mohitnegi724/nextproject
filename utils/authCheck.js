const authCheck=async(req, res, next)=>{
    console.log('request for', req.originalUrl)
    if(req.cookies['express:sess']){
        if(req.user){
            res.authenticated = true
            next()
        }else{
            res.send({
                authenticated: false
            })
        }
    }
}

module.exports = authCheck