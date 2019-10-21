
var Products = require('../../models/products'); // Model object

// Wrap all the methods in an object

var product = {

    getAll : function(req, res){
        console.log("Get All Initiated");

        Products.find(function(err, data){
                if(err){
                    res.status(500).send('There is server internal error');
                }else{
                    res.json(data); // Return all the data from DB
                }
        })
    },
    getPropertyByCity : function(req, res){
        var _city = req.params.city;
        Products.find({City : _city}, function(err, data){
            if(err){
                res.status(500).send('There is server internal error');
            }else{
                res.json(data); // Return the data which matches the city from DB
            }
        })
    },

    getPropertyByID : function(req,res){
        var id = req.params.id;

        Products.find({_id: id}, function(err, data){
            if(err){
                res.status(500).send('There is server internal error');
            }else{
                res.json(data); // Return the data which matches the ID from DB
            }
        })
    },

    getLocationsByEnteredText : function(req, res){
        console.log("get Location initited" + req.params.locationText);
        // query to get the locations based on start with letter.
        var query = { City: { $regex: '^' + req.params.locationText, $options: "i" } };
        Products.find(query, function (err, data) {
            if (err) {
                res.status(500).send({ message: "Some error ocuured while retrieving notes." });
            } else {
                console.log(data);
                res.json(data);
            }

        })
    },
    showProperties : function(req, res){

        if(req.params.status == 'All'){
            var query = {
                Type : req.params.type,
                City  : req.params.location
            }
        }else{
            var query = {
                Type : req.params.type,
                City  : req.params.location,
                Status : req.params.status
            }
        }

        Products.find(query, function(err,data){
            if (err) {
                res.status(500).send({ message: "Some error ocuured while retrieving notes." });
            } else {
                console.log(data);
                res.json(data);
            }
        })
    },
	
	storeData : function (req, res, next) {

        console.log("Create hit");
        var product = new Products({
            Address: req.body.Address,
            AgentAddress: req.body.AgentAddress,
            AgentContact: req.body.AgentContact,
            AgentDetails: req.body.AgentDetails,
            AgentMail: req.body.AgentMail,
            AgentName: req.body.AgentName,
            Amenities: req.body.Amenities,
            AdditionalDetails: req.body.AdditionalDetails,
            Area: req.body.Area,
            Availability: req.body.Availability,
            Balcony: req.body.Balcony,
            Bath: req.body.Bath,
            Bed: req.body.Bed,
            Builtin: req.body.Builtin,
            CarGarages: req.body.CarGarages,
            City: req.body.City,
            Description: req.body.Description,
            Facing: req.body.Facing,
            Gated: req.body.Gated,
            Id: req.body.Id,
            Kitchen: req.body.Kitchen,
            Parking: req.body.Parking,
            posted: req.body.posted,
            Price: req.body.Price,
            Propimages: req.body.Propimages,
            State: req.body.State,
            Summary: req.body.Summary,
            Status: req.body.Status,
            Type: req.body.Type,
            Password: req.body.Password

        });

        product.save(function (err, data) {
            console.log(data);
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error ocuured while creating the Note." });
            } else {
                res.send(data);
                console.log(data);
            }
        });
    }



}

module.exports = product;


