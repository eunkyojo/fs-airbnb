const express = require('express');
const router = express.Router();
const Listing = require("../models/listing-model")

//get all
router.get("/", (req, res) => {
    Listing
      .getAllListings()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  //get by ID
  router.get("/search", (req, res)=>{
      Listing
      .getListingById(req.params.id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  //create
  router.post("/create",  (req, res)=>{
      Listing
      .createListing()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  //update
  router.patch("/update", (req, res)=>{
      Listing
      .updateListingById(req.params.id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  //delete
  router.delete("/delete", (req, res)=>{
      Listing
      .removeListing(req.params.id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  

module.exports = router;
