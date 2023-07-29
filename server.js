const express = require('express');

const app = express();


app.get('/', (req, res) =>{

    res.send('API Call Success')
})

app.listen(6000, () => {
    console.log('NODE API IS UP ON PORT 6000');
})