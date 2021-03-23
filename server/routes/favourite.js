const router = require('express').Router();
let Favourite = require('../models/favourite.model');

router.route('/').post(async(req, res) => {
    const username = req.body.username
    const favouriteUser = await Favourite.findOne({username})
    const favouritegiphy = favouriteUser.giphy;
    res.send(favouritegiphy) 
});
router.route('/delete').post(async(req, res) => {
    const username = req.body.username
    const id = req.body.id
    const favouriteUser = await Favourite.findOneAndUpdate( {username}, { $pull: {giphy : {id : id } } }, {new:true})
    const favourite = favouriteUser.giphy;
    res.send(favourite)
});

router.route('/add').post(async (req, res) => {
    const giphy = req.body.giphy;
    const username = req.body.username
    const favouriteUser = await Favourite.findOne({username})
    favouriteUser.giphy.push(giphy);
    favouriteUser.save()
        .then(data =>{
            res.json(data)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;