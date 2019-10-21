
// step 1 : Inject the mongoose module and establish connection
var mongoose = require('mongoose'),
	dbname = "RealEstate";

mongoose.connect("mongodb://localhost:27017/" + dbname);
var db = mongoose.connection;

// step 2 : Wait for the connection response, 
db.on("error", console.error); // If there is an error in connectivity
db.once("open", insertProducts); // If the connections to the mongo DB was succeeded. 

// step 3: Create the model with blueprint of the data to be stored in the DB

// Here 'Property' is the collection (table) name 
var Product = mongoose.model("Property", {
		
    Address: String,
    AgentAddress: String,
    AgentContact: String,
    AgentDetails: String,
    AgentMail: String,
    AgentName: String,
    Amenities: String,
    AdditionalDetails: Object,
    Area: String,
    Availability: String,
    Balcony: String,
    Bath: String,
    Bed: String,
    Builtin: String,
    CarGarages: String,
    City: String,
    Description: String,
    Facing: String,
    Gated: String,
    Id: String,
    Kitchen: String,
    Parking: String,
    posted: String,
    Price: String,
    Propimages: String,
    State: String,
    Summary: String,
    Status: String,
    Type: String,
    Password : String

});

/*function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
	
}*/

function insertProducts(){

	var products = new Product({
	    Address	:	 "1235 Robert Boursa",
	    AgentAddress	:	 "9089 your adress her",
	    AgentContact	:	 "+1 (514) 123 5678",
	    AgentDetails	:	 "About Suresh Constructions Pvt. Ltd.Suresh constructions pvt. Ltd. Offer residential apartment(S) on sale in and around Canada.",
	    AgentMail	:	 "Beela@sureshRealtors.com",
	    AgentName	:	 "Beela",
	    Amenities	:	 [ "WaterFrontView", "Fire Place", "Jog Path", "Swimming pool", "BikePath", "childrenpark" ],
	    AdditionalDetails: {
							"waterfront": "yes",
							"view": "Intracoastal View,Direct ew",
							"Parking": "2 Or More Spaces,Covered Parking,Valet Parking",
							"BuiltIn": "2017",
							"Location": "Montreal-North"
							},
	    Area	:	 "288sqft",
	    Availability	:	 "Ready to Move",
	    Balcony	:	 "2",
		Bath	:	 "2",
		Bed	:	 "2",
		Builtin	:	 "2017",
		CarGarages 	:	  "2",
		City	:	 "Montreal",
		Description	:	 "This is a premium joint venture development of Beela's construction, a luxurious and 	prestigious project",
		Facing	:	 "North-East",
		Gated	:	 "yes",
		Id	:	 "1",
		Kitchen	:	 "1",
		Parking	:	 "yes",
		Posted	:	 "1/21/2018",
		Price	:	 "600000$",
		Propimages	:	 "prop1.jpg",
		State	:	 "QC",
		Summary	:	 "Independent House sale in Montreal",
		Status	:	"Sale",
		Type: "Apartment",
		Password :"Suresh"
	});	

	// To store the data using model object
	products.save(function(err){
		console.log("Data storeed into the Mongo DB");
		if(err) console.log(err);
	});

}