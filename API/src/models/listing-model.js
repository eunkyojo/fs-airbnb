var mysqlConn = require("../database/database");

var Listing = function(listing) {
  this.name = listing.name;
  this.description = listing.description;
  this.location = listing.location;
  this.pricePerNight = listing.pricePerNight;
  this.serviceProviderId = listing.serviceProviderId;
  this.userId = listing.userId;
};


Listing.getAllListings = function() {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from listing", function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        // console.log("Listings : ", res);
        resolve(res);
      }})
  }).catch((err)=>{
    console.log(err)
  })
};

// //Promise: callback function built into javascript (ES6)
// Listing.getAllListings = function(result) {
//   return new Promise((resolve, reject) => {
//     mysqlConn.query("Select * from listing", function(err, res) {
//       if (err) {
//         console.log("error: ", err);
//         reject(err);
//       } 
//       //
//       let listings = res;
//       mysqlConn.query(
//         function(err, res) {
//           if (err) {
//             console.log("error: ", err);
//             result (err, null);
//           } else {
//             listings.forEach(listing => {
//               listing.imgUrl = []; //<- setting as empty array
//               res.forEach(imgUrl => {
//                 if (imgUrl.listingId == listing.id) {
//                   listing.imgUrl.push(imgUrl.imgUrl);
//                 }
//               })
//             });
//             console.log("Users : ", res)
//             result(null, listings);
//           }
//         }
//       )
//       // else {
//       //   console.log("Listings : ", res);
//       //   resolve(res);
//       // }})
// })})};

Listing.getListingById = function(listingId, result) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from listing where id = ? ", listingId, function(
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

Listing.createListing = function(newListing) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("INSERT INTO listing set ?", newListing, function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
  });})
};

Listing.updateListingById = function(listingId, listing, result) {
  return new Promise((resolve, reject) => {
    mysqlConn.query(
      "UPDATE listing SET listing = ? WHERE id = ?",
      [listing, listingId],
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

Listing.removeListing = function(listingId, result) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("DELETE FROM listing WHERE id = ?", listingId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res);
      }
    });})
};

module.exports = Listing;
