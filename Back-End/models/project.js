"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});
module.exports = mongoose.model("Project", ProjectSchema); // Lo que hace con Proyect, es ponerlo en minusculas y pluralizarlo, por
                                                           // lo que lo guardara en la coleccion projects