import express = require('express')

const app: express.Application = express();
const PORT: string = process.env.PORT || '3000';

app.get('/', (req, res) => {
    res.send('Hello, again!')
})

app.post('/greeter', (req, res) => {
    let [name] = req.body;
    res.send(`Name: ${name}`)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}) 