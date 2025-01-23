const express = require('express');
const app = express();
const port = process.env.PROT || 5000;

app.get('/', async (req, res) => {
    res.send('Course Haven is Running!😁')

})

app.listen(port, () => {
    console.log(`Server is Running port by ${port}`)
})