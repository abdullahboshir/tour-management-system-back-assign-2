const Tour = require("../models/Tour");
const {
    getTourServices,
    postTourServices,
    tourDetailsWithIdServices,
    updateTourServices,
    tourTrendingServices,
    tourCheapestServices
} = require("../services/tour.services");




// get all and select tours controller
exports.getTours = async (req, res) => {
    try {

        const filters = {...req.query};
        const excludeFields = ['name', 'price', 'page', 'limit'];
        excludeFields.forEach(field => delete filters[field]);

        const queries = {};
        if(req.query.fields){
            const field = req.query.fields.split(',').join(' ');
            queries.field = field;
            console.log(queries)
        }

        const getAllTour = await getTourServices(filters, queries);

        res.status(200).json({
            status: 'Success',
            message: 'data is successfully got',
            data: getAllTour
        });

    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'data isn\'t goted',
            error: error.message
        })
    }
};




// post a tour contorller
exports.postTour = async (req, res) => {
    try {
        const tourPost = await postTourServices(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'data is successfully inserted',
            data: tourPost
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'data isn\'t inserted',
            error: error.message
        });
    }
};



// tour details with id 
exports.tourDetailsWithId = async (req, res) => {
   try {
    const {id} = req.params;
    const filter = await tourDetailsWithIdServices(id);
    console.log(filter.viewCount)
    res.status(200).json({
        status: 'Success',
        message: `data is view-`,
        data: filter
    });
   } catch (error) {
    res.status(400).json({
        status: false,
        message: 'data isn\'t inserted',
        error: error.message
    });
   }
}


// tour update with id 
exports.updatetourController = async (req, res) => {
 try {
    const {id} = req.params;
    const updateItem = req.body;
    const result = await updateTourServices(id, updateItem);

    if(result.acknowledged === false){
        res.status(400).json({
            status: false,
            message: 'data isn\'t updated',
            error: error.message
        });
    }
    else{
        res.status(200).json({
            status: 'Success',
            message: 'data is successfully updated',
            data: result
        });
    }
 } catch (error) {
    res.status(400).json({
        status: false,
        message: 'data isn\'t updated',
        error: error.message
    });
 }
};


exports.tourTrendingController = async (req, res) => {
    const topViewsTour = await tourTrendingServices();
    res.send({message: 'top view found', topViewsTour})
}


exports.tourCheapestController = async (req, res) => {
    const topViewsTour = await tourCheapestServices();
    res.send({message: 'top view found', topViewsTour})
}


exports.tourDeleteController = async (req, res) => {
    const {id} = req.params;
    const result = await Tour.deleteOne({_id: id})
    res.send(result)
}