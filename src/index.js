const express= require('express')

const app = express()
const port = 3000


app.get('', (req, res) => {
    res.send('<h1>Chat App</h1>')
})

app.listen(3000, () => {
    console.log('server is up on port ' + port)
})
