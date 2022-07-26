const homeModel = require('../../models/homeModel');
class HomeController{
    index(req,res,next) {
        homeModel.find({})
        .then(homeModels => {
            homeModels = homeModels.map(homeModel => homeModel.toObject())
            res.render('home',{ homeModels })
        })
        .catch(next);
    }
}
module.exports = new HomeController;