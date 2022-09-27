const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');




// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log('Database connection is succesfull'.bold.green)
// });




const uri = "mongodb+srv://acc_assingment_2:4LZIZ4TaKjwjuEHz@cluster0.phbgpqx.mongodb.net/inventory_managemant_ACC?retryWrites=true&w=majority";


mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('connection is successful');
}).catch((error) => console.log('no connection'))



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`.bold.yellow)
});
