const mongoose = require('mongoose');

// tour Schema 
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this product'],
        unique: [true, 'Name must be unique'],
        minLengh: [5, 'Please must be at least 3 character name'],
        maxLengh: [100, 'Name is too large Please']
    },
    price: {
        type: Number,
        required: [true, 'please input a price'],
        min: [0, 'Price can\'t be negative']
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
     viewCount: {
        type: Number,
        default: 0 
     }
});


tourSchema.methods.logger = function () {
    console.log(`Data saved for ${this.name}`)
}

const Tour_data = mongoose.model('Tour_data', tourSchema);


module.exports = Tour_data;