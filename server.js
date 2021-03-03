const express = require('express')

const app = express()

app.use((req,res)=>{
    console.log(req.method, req.url)
    res.end('HI there')
})














app.listen(3000, () => {
    console.log('server started at PORT:3000')
})