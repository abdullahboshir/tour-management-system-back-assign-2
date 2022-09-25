const Tour = require("../models/Tour");



// get all or select tours services
exports.getTourServices = async (filters, queries) => {
    const getAllTour = await Tour.find(filters).select(queries.field);
    return getAllTour;
};


// post a tour service
exports.postTourServices = async (data) => {
    const postATour = await Tour.create(data);
    return postATour;
};



// tour details with id 
exports.tourDetailsWithIdServices = async (id) => {
    const updateTour = await Tour.updateOne({ _id: id }, { $inc: { viewCount: 1 } }, { runValidators: true });
    const tourDetails = Tour.findOne({ _id: id });
    return tourDetails;
};


// tour patch services 
exports.updateTourServices = async (tourId, data) => {
    const updateTour = await Tour.updateOne({ _id: tourId }, data, { runValidators: true });
    return updateTour;
};

// get top 3 view trend
exports.tourTrendingServices = async (req, res) => {
    const result = await Tour.find({}).sort({'viewCount': -1}).limit(3)
    return result;
}

// get cheapest 3 tour 
exports.tourCheapestServices = async (req, res) => {
    const result = await Tour.find({}).sort({'price': 1}).limit(3)
    return result;
}

