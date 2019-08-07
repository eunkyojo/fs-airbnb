var mysqlConn = require("../database/database");

var Booking = function(booking) {
  this.startDate = booking.startDate;
  this.endDate = booking.endDate;
  this.guestCount = booking.guestCount;
  this.listingId = booking.listingId;
  this.guestId = booking.guestId;
};

Booking.getAllBookings = function() {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from booking", function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log("Bookings : ", res);
        resolve(res);
      }})
  });
};

Booking.getBookingById = function(bookingId) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("Select * from booking where id = ? ", bookingId, function(
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

Booking.createBooking = function(newBooking) {
  console.log(newBooking)
  return new Promise((resolve, reject) => {
    mysqlConn.query("INSERT INTO booking set ?", newBooking, function(err, res) {
      // if (err) {
      //   console.log("error: ", err);
      //   reject(err);
      // } else {
        console.log(res.insertId);
        resolve(res.insertId);
      // }
  });})
};

Booking.updateBookingById = function(bookingId, booking) {
  return new Promise((resolve, reject) => {
    mysqlConn.query(
      "UPDATE booking SET booking = ? WHERE id = ?",
      [booking, bookingId],
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

Booking.removeBooking = function(bookingId) {
  return new Promise((resolve, reject) => {
    mysqlConn.query("DELETE FROM booking WHERE id = ?", bookingId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res);
      }
    });})
};

module.exports = Booking;
