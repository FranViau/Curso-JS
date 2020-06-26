"use strict"

var express = require("express");
var ProjectController = require("../controllers/project");
var router = express.Router();
var multiparty = require("connect-multiparty"); // Permite subir archivos por POST
var multipartyMiddleWare = multiparty({ uploadDir: "./uploads" });

router.get("/home",ProjectController.home); // Get para sacar resultados, Post para postearlos
router.post("/test",ProjectController.test);
router.post("/save", ProjectController.saveProject);
router.get("/project/:id", ProjectController.getProject);
router.get("/projects", ProjectController.getProjects);
router.put("/project/:id?", ProjectController.updateProject); // El metodo put funciona para la actualizacion de recursos 
router.delete("/project/:id", ProjectController.deleteProject); 
router.post("/upload-image/:id", multipartyMiddleWare, ProjectController.uploadImage); // EL middleware se pasa como 2do parametros
router.get("/get-image/:image", ProjectController.getImageFile);

module.exports = router;