const express = require('express');
const app = express();
const cors = require('cors');
const tourRoute = require('./routes/tours.route');



// middleWare 
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Route is working!')
});

app.use('/api/v1/tours', tourRoute)

module.exports = app;

