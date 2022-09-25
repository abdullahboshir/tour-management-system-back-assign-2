const express = require('express');
const tourControllers = require('../controllers/tour.controller');
const router = express.Router();



router.route('/')
.get(tourControllers.getTours)
.post(tourControllers.postTour);


router.route('/:id')
.patch(tourControllers.updatetourController)
.get(tourControllers.tourDetailsWithId)
// .delete(tourControllers.tourDeleteController)


router.route('/tour/trending')
.get(tourControllers.tourTrendingController)


router.route('/tour/cheapest')
.get(tourControllers.tourCheapestController)




module.exports = router;
