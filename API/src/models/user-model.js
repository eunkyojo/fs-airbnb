var mysqlConn = require("../database/database");

//Task object constructor
//constructor function: defining properties to create functions on top of class
var User = function(user) {
  this.id;
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
};

User.getAllUsers = function() {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from user", function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        // console.log("Users : ", res);
        resolve(res);
      }})
  }).catch((err)=>{
    console.log(err)
  })
};

User.getUserById = function(userId) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from user where id = ? ", userId, function(
      err,
      res
    ) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res);
      }
  });})
};

User.createUser = function(newUser) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
  });})
};

User.updateUserById = function(userId, user) {
  return new Promise((resolve, reject) => {
    mysqlConn.query(
      "UPDATE user SET user = ? WHERE id = ?",
      [user, userId],
      function(err, res) {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      }
    );})
};

User.removeUser = function(userId) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res);
      }
    });})
};

module.exports = User;


// module.exports = class User {
//   constructor(name, surname, email, password) {
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.password = password;
//   }
// }


// don't want hardcoded data ->
// const users = [
//     {
//         "id": "1",
//         "name": "Byron",
//         "role": "user",
//         "email": "byron@mail.com",
//         "password": "P@ssword"
//       },
//       {
//         "id": "2",
//         "name": "brett",
//         "role": "service provider",
//         "email": "brett@mail.com",
//         "password": "P@ssword1"
//       },
//       {
//         "id": "3",
//         "name": "Riaz",
//         "role": "user",
//         "email": "riaz@mail.com",
//         "password": "P@ssword2"
//       },
// ]

/////////////////////////////////

// fs = require("fs");

// const roles = {
//   ADMIN: "admin",
//   PROVIDER: "provider",
//   USER: "user"
// }

// module.exports = class User{
  
//   constructor(newId, newName, newEmail, newPassword) {
//     this.id = newId;
//     this.name = newName;
//     this.email = newEmail;
//     this.password = newPassword;
//     this.role = roles.USER;
//   };

//   //User.prototype.getUsers = function() {
//     //return ---
//   createUser(AuthUser){
//     return new Promise((resolve, reject)=>{
//       fs.readFile('../data/data.json', (err, data)=>{
//         if(err){
//           reject(err);
//         } else{
//           let users = JSON.parse(data).users;
//           users.push(AuthUser);
//           let dataObject = {
//             users: users
//           };
//           let userJSON = JSON.stringify(users);
//           fs.writeFile("./src/data/data.json", userJSON, (err)=>{
//             if(err){
//               reject(err);
//             } else{
//               resolve(users);
//             }
//           });
//         }
//       });
//     })
//   }
//   getUsers(){
//     return new Promise((resolve, reject)=>{
//       fs.readFile('../data/data.json', (err, data)=>{
//         if(err){
//           reject(err)
//         } else{
//           let users = JSON.parse(data).users
//           resolve(users)
//         }
//       });
//     })
//   }

// };