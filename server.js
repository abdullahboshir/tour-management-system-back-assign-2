const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');




// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log('Database connection is succesfull'.bold.green)
// });




const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.phbgpqx.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongodb connection is successful');
}).catch((error) => console.log('mongodb connection is failed'))



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`.bold.yellow)
});
