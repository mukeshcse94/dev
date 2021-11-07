var express = require('express');
var router = express.Router();
const Car = require('../models/Car');

router.get('/', (req, res) => {
  // Find only model with large value
  // Car.find({ name: "Park Lane 38" }, (err, listOfCars) => {

  //Find  "name" field starts with the letter "P"
  // Car.find({ name: /^P/ }, (err, listOfCars) => {

  // Or Operator
  // Car.find({ $or: [{ name: "Maruti" }, { model: "large" }] }, (err, listOfCars) => {
  // console.log("cars")
  Car.find((err, listOfCars) => {
    if (err) throw err;
    res.json(listOfCars)
  })
  // .select({ name: 1 })                                   // Get only name field values
  // .countDocuments()                                      // number of records
  // .sort({ name: 1, model: 1 })                           // Assending order name
  // .limit(5)
  // .distinct("model")                                     // Return Only Unique values
  // .set({ name: true })
});

router.post('/', (req, res) => {
  let car = new Car();

  car.name = req.body.name;
  car.carMake = req.body.carMake;
  car.model = req.body.model

  car.save(err => {
    if (err) throw err;
    res.json({ "Status": "Success" });
  });
});

module.exports = router;