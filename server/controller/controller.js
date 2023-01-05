var Chickendb = require('../model/model');

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// CHIICKEN RUN API
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
 

// create and save new chicken
exports.create_chicken = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
  
    console.log("req.body.birthday: ", req.body.birthday)
    // new chicken
    const chicken = new Chickendb({
        name : req.body.name,
        birthday : req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning : req.body.isRunning
    })
  
    // save chicken in the database
    chicken
        .save(chicken)
        .then(data => {
            //res.send(data)
            //res.redirect('/add-chicken');
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
  
 }
  

 // retrieve and return all chicken/ retrive and return a single chicken
 exports.find_chicken = (req, res)=>{
  
    if(req.query.id){
        const id = req.query.id;
  
        Chickendb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found chicken with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving chicken with id " + id})
            })
  
    }else{
        Chickendb.find()
            .then(chicken => {
                res.send(chicken)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving chicken information" })
            })
    }
  
   
 }
  
 // Update a new idetified chicken by chicken id
 exports.update_chicken = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
  
    const id = req.params.id;
    Chickendb.findByIdAndUpdate(id, req.body, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update chicken with ${id}. Maybe chicken not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update chicken information"})
        })
 }
  
  
 // Update a new idetified chicken by chicken id
 exports.updateFields_chicken = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
  
    const id = req.params.id;
    Chickendb.findByIdAndUpdate(id, req.body, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update chicken with ${id}. Maybe chicken not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update chicken information"})
        })
 }
  

 // Delete a chicken with specified chicken id in the request
 exports.delete_chicken = (req, res)=>{
    const id = req.params.id;
  
    Chickendb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Chicken was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Chicken with id=" + id
            });
        });
 }
  
 // Increase steps a chicken with specified chicken id in the request
 exports.increase_steps_chicken = (req, res)=>{
  
    const id = req.params.id;
    Chickendb.findOneAndUpdate({_id: id, isRunning: true}, { $inc: { steps: 1 }}, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Increase steps a chicken with ${id}. Maybe chicken not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Increase steps a chicken"})
        })
  
 }
 
