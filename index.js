const express = require('express')
const app = express()
const port = 2700

app.get('/api', (req, res) => {
    res.send('API is up and running...')
})
app.get('/api/auth', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})