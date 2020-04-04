const express = require('express')
const next = require('next')
const auth = require('./auth');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000;
app.prepare().then(() => {
    
    const server  =express();

    server.use('/api', auth)

    server.all('*', (req, res) => {
        return handle(req, res)
    })
  

    server.listen(PORT, ()=> console.log('Server is running on ', PORT))
})