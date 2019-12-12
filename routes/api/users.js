const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'Users work' }));

// // @route   GET api/edit-user/:userId
// // @desc    get a single users
// // @access  Public
router.get('/get-user/:userId', (req, res) => {
  // console.log(req.params.userId);
  User.find({ userId: req.params.userId })
    .populate('user', ['userId', 'userName', 'adminName', 'softwareList'])
    .then(user => {
      if (!user) {
        errors = 'There are no such user';
        return res.status(404).json(errors);
      } else {
        res.json(user);
      }
    })
    .catch(err => res.status(404).json(err));
});

router.get('/get-admin/:adminName', (req, res) => {
  // console.log(req.params.userId);
  User.find({ adminName: req.params.adminName })
    .populate('user', ['userId', 'userName', 'adminName', 'softwareList'])
    .then(user => {
      if (!user) {
        errors = 'There are no such user';
        return res.status(404).json(errors);
      } else {
        res.json(user);
      }
    })
    .catch(err => res.status(404).json(err));
});

// // @route   POST api/users/add-user
// // @desc    Register user
// // @access  Public
router.post('/add-user', (req, res) => {
  const newUser = new User({
    userId: req.body.userId,
    userName: req.body.userName,
    adminName: req.body.adminName,
    softwareList: req.body.softwareList
  });
  newUser
    .save()
    .then(user => {
      res.json(user);
      console.log('Created new user info');
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
