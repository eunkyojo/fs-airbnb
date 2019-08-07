const express = require('express');
const router = express.Router();
//const router = require('express').Router() ?

const User = require('../models/user-model')

const AuthService = require("../services/auth-service");
const authService = new AuthService();

router.post('/register', (req, res) => {
    authService
        .register(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json({msg: err});
        });
})

router.post('/login', (req, res) => {
    console.log(req.body);
    authService
        .login(req.body)
        .then(user => {
            console.log("res:", user);
            res.send(user);
        })
        .catch(err => {
            res.status(400).json({msg: err});
        });

    // const authUser = req.body;

    // User.prototype.getAllUsers().then(data=> {
    //     const dbUser = data.users.filter(user=>{
    //         return user.email == authUser.email;
    //     });

    //     if(dbUser){
    //         if(dbUser[0].password == authUser.password){
    //             res.send(dbUser[0]);
    //         }else{
    //             res.status(400).send("Incorrect password");
    //         }
    //     }else{
    //         res.status(400).send("User not found");
    //     }
    // })
    // .catch(err => {
    //     res.status(400).send(err);
    // });
})

//export router module
module.exports = router;
