const User = require('../models/user-model');
var fs = require("fs");
//var bcrypt = require('bcryptjs');
//var hash = bcrypt.hashSync("B4c0/\/", salt);
//var jwt = require('jsonwebtoken');

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}

module.exports = class AuthService {
    constructor() {}

    // async hashPassword(password){
    //     var salt = bcrypt.genSaltSync(10);
    //     return await bcrypt.hash(password, salt)
    // }

    register(user) {
        return new Promise((resolve, reject) => {
            console.log("user");
            User.getAllUsers().then(data => {
                console.log(JSON.stringify(data))
                data.forEach(existingUser => {
                    if (existingUser.email == user.email) {
                        reject("This email is already in use");
                    }
                });
                console.log(JSON.stringify(user.name))
                //const hashPassword = this.hashPassword(user.password);
                const userObj = {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                };
                console.log(JSON.stringify(user.email))
                const newUser = new User(userObj);

                User.createUser(newUser).then(res => { 
                    console.log(JSON.stringify(res));
                    resolve(res);
                }).catch(err => {
                    reject(err)
                })
            });
        })
    }

    login(authUser) {
        console.log(authUser, "hi")
        return new Promise((resolve, reject) => {
            User.getAllUsers()
                .then(dbUsers => {
                    let dbUser = dbUsers.filter(user => {
                        return user.email == authUser.email;
                    });
                    console.log(dbUser);
                    if (dbUser.length == 1) {
                        console.log("user found")
                        if (dbUser[0].password == authUser.password) {
                            console.log("user")
                            resolve(dbUser)
                        } else {
                            reject("Incorrect password")
                        }
                    } else {
                        reject("User not found")
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        }
        )}
                // if (dbUser.length) {
                //    // const match = bcrypt.compare(dbUser[0].password, user.password);
                //     if (match) {
                //         // const jwt = this.getJwtToken(dbUser[0], true);
                //         // const authRes = {
                //         //     user: dbUser[0],
                //         //     jwt: jwt
                //         // };
                //         resolve(authRes);
                //     } else {
                //         reject("Incorrect password");
                //     }
                // else {
                //     reject("User not found");
                // }
       
    }

    // async getJwtToken(user, rememberUser) {
    //     let jwtObject = {}

    //     jwtObject.id = user.id;
    //     jwtObject.name = user.name;
    //     jwtObject.email = user.email;
    //     jwtObject.role = user.role;
    //     jwtObject.remember = rememberUser;

    //     return await jwt.sign(Object.assign({}, jwtObject), "secret-key", {
    //         expiresIn: "1d"
    //     })
    // }

    // async verifyToken(token) {
    //     //decrypt with the same key
    //     return await jwt.verify(token, "secret-key");
    // }