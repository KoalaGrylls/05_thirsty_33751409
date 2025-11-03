// Create a new router
const express = require("express");
const router = express.Router();
// This variable holds data about the shop
var shopData = {
  shopName: "The Thirsty Student",

// Product categories for the search form
productCategories: [
    "Beer",
    "Wine",
    "Soft Drinks",
    "Hot Drinks",
    "Juice",
    "Energy Drinks",
    "Tea",
    "Coffee",
    "Water"
],

  // List of convenience stores
  shops: [
    {
      name: "Ikebukuro Store",
      manager: "Yamada Ken",
      address: "1-2-3 Sunshine, Toshima-ku, Tokyo"
    },
    {
      name: "Shibuya Store",
      manager: "Sato Haru",
      address: "5-1 Udagawacho, Shibuya-ku, Tokyo"
    },
    {
      name: "Akihabara Store",
      manager: "Tanaka Mei",
      address: "4-12-9 Sotokanda, Chiyoda-ku, Tokyo"
    }
  ]
};


// Handle the main routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 });


router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!' + 'We will send an email to you at ' + req.body.email);
});


router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});


router.post("/survey_submitted", (req, res) => {
  const formData = req.body;

  res.render("survey_result.ejs", {
    shopName: shopData.shopName,
    survey: formData
  });
});


// Export the router object so index.js can access it
module.exports = router;
