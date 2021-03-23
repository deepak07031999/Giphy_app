const router = require('express').Router();
let User = require('../models/users.model');
let favourite = require('../models/favourite.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/add').post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const imageUrl = req.body.imageUrl;
  const newUser = new User({ name, username, password,email, imageUrl });
  const newFavData = new favourite({ username })
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  return newFavData.save()
    .then(() => res.json('newFavData added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/image').post(async(req, res) => {
  const username = req.body.username
  const findUser = await User.findOne({username})
  const userimage = findUser.imageUrl
  res.send(userimage) 
});

router.route('/login').post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const foundUser = await User.findAndValidate(username, password)
  if (foundUser) {
    res.send(username);
  } else {
    res.status(400).send({
      message: 'This is an error!'
    });

  }
});

module.exports = router;