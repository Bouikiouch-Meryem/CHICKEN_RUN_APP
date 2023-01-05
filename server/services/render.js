var moment = require('moment');
const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /chicken
    axios.get('http://localhost:3000/chicken')
        .then(function(response){
            res.render('index', { chickens : response.data, moment: moment });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_chicken = (req, res) =>{
    res.render('add_chicken');
}

exports.update_chicken = (req, res) =>{
    axios.get('http://localhost:3000/chicken', { params : { id : req.query.id }})
        .then(function(chickendata){
            //console.log("chickendata.data: " + chickendata.data)
            res.render("update_chicken", { chicken : chickendata.data, moment: moment})
        })
        .catch(err =>{
            res.send(err);
        })
}