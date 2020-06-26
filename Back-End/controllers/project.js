"use strict"
var Project = require("../models/project");
const { resource } = require("../app");
var fs = require("fs");
var path = require("path");

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message: "Hola desde el controlador, funcion home"
        });
    },
    test: function(req,res){
        console.log(res);
        return res.status(200).send({
            message: "Hola desde el controlador, funcion test"
        });
    },
    saveProject: function(req,res){
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err,projectStored) =>{
            if(err) return res.status(500).send({message: "Error en la peticion"});
            if(!projectStored) return res.status(404).send({ message: "No se ha podidio guardar el proyecto"});
            return res.status(200).send({project:projectStored});
        })
    },
    getProject: function(req,res){
        var projectId = req.params.id;
        if(projectId == null) if(!project) return res.status(404).send({message:"El proyecto no existe"});

        Project.findById(projectId, (err, project)=>{

            if(err) res.status(500).send({message: "Error al devolver el proyecto"});
            if(!project) return res.status(404).send({message:"El proyecto no existe"});
            // Para devolver un proyecto hay que pasarle el id del proyecto en la url /project/5ed5007b654fd916b89c5555
            
            return res.status(200).send({project});
        });
    },
    getProjects: function(req,res){
        // Project.find({year:2020}) // Lo que hace find es sacarme todos los datos de un modelo o entidad
        Project.find({}).sort("year").exec((err,projects)=> {
            if(err) return res.status(500).send({message:"Error al devolver los datos."});
            if(!projects) return res.status(404).send({message:"No hay proyectos para mostrar"});

            return res.status(200).send({projects: projects});
        });
    },
    updateProject: function(req,res){
        let projectId = req.params.id;
        let update = req.body;
        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated)=>{ // New true es para que devuelva el objeto nuevo
            if(err) return res.status(500).send({message:"Error al actualizar los datos."});
            if(!projectUpdated) return res.status(404).send({message:"No existe el proyecto para actualizar"});
            
            return res.status(200).send({project:projectUpdated});
        });
    },
    deleteProject: function(req,res){
        let projectId = req.params.id;
        Project.findByIdAndDelete(projectId,(err,projectDeleted) =>{
            if(err) return res.status(500).send({message:"Error al eliminar el proyecto"});
            if(!projectDeleted) return res.status(404).send({message:"No existe el proyecto para borrar"});

            return res.status(200).send({project:projectDeleted});
        });
    },
    uploadImage: function(req,res){
        let projectId = req.params.id;
        
        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split("\\"); // Separa lo que viene luego de la // en el path de la foto
            var fileName = fileSplit[1];
            var extSplit = fileName.split("\.");
            var fileExt = extSplit[1];
            if(fileExt == "gif" || fileExt == "png" || fileExt == "jpg" || fileExt == "jpeg" ){

                Project.findByIdAndUpdate(projectId, {image: fileName},{new:true},  (err,projectUpdated) =>{
                    if(err) return res.status(500).send({message:"Error al cargar la imagen"});
    
                    if(!projectUpdated) return res.status(404).send({message:"No existe la imagen para cargar"});
    
                    return res.status(200).send({
                        project: projectUpdated
                    });
                })
            }
            else{
                fs.unlink(filePath, err=>{ // Borrar la imagen subida sin el tipo requerido
                    return res.status(200).send({message:"La extension no es valida"});
                });
            }
        }
    },
    getImageFile: function(req,res){
        var file = req.params.image;
        var pathFile = "./uploads/" + file;

        fs.exists(pathFile,exists =>{
            if(exists){
                return res.sendFile(path.resolve(pathFile))
            }
            else{
                return res.status(200).send({
                    message: "No existe la imagen"
                })
            }
        });
    }
};
module.exports = controller;