const express = require('express');
const router = express.Router();
const User = require("../models/user-model")

//get all
router.get("/", (req, res) => {
  User
    .getAllUsers()
    .then(result => {
      //var parseData = JSON.parse(result);
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

//get by ID
router.get("/:id", (req, res)=>{
  User
  .getUserById(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

//create
router.post("/create",  (req, res)=>{
  User
  .createUser()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

//update
router.patch("/update", (req, res)=>{
  User
  .updateUserById(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

//delete
router.delete("/delete", (req, res)=>{
  User
  .removeUser(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});


module.exports = router;


// const express = require('express');

// const router = express.Router();

// // const usersRouter = require('../models/user-model')
// // router.get('/', function(req, res){
// //     res.send(usersRouter);
// // });

// const User = require("../models/user-model");

// //instance of a user
// //(req, res) : callback function
// router.get("/", function(req, res) {
//   let user = new User(3, "Joe", "joe@mail.com", "123")
//   //User.prototype.getUsers()
//   user.createUser(req.body)
//   .then(users=>{
//     res.send(users);
//   }).catch(err=>{
//     //if status undefined, 200.
//     res.status(400).send(err);
//   })
// });

// router.post("/", function(req, res){
//   User.prototype
//     .createUser(req.body)
//     .then(users=>{
//       res.send(users);
//     })
//     .catch(err=>{
//       res.status(400).send(err);
//     });
// })


// module.exports = router;

// //scalable, reliable, robust
