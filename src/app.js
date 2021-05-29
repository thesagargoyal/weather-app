const express = require('express');
const app = express(); 
const port = 3000;
const path = require('path');

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, '../views'))
//Home Page
app.get("/", (req, res)=>{   
    res.render("index");
});

//About Page
app.get("/about", (req, res)=>{
    res.render("about");
});

//Main Weather Page
app.get("/weather", (req, res)=>{  
    res.render("weather");
});

//Wrong Path
app.get("*", (req, res)=>{
    res.render('404error')
})

app.listen(port, ()=>{
    console.log("Server is listening");
});