const express = require('express');
const router = express.Router();
const Booking = require("../models/booking-model")

//get all
router.get("/", (req, res) => {
  Booking
    .getAllBookings()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

//get by ID
router.get("/:id", (req, res)=>{
    Booking
    .getBookingById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

//create
router.post("/create",  (req, res)=>{
    Booking
    .createBooking(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

//update
router.patch("/update", (req, res)=>{
    Booking
    .updateBookingById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

//delete
router.delete("/delete", (req, res)=>{
    Booking
    .removeBooking(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});


module.exports = router;