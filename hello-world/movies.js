var express = require('express');
var router = express.Router();
var movies = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

router.get('/',function(req,res){
    res.json(movies);
    var formattedJson = JSON.stringify(movies, null, 4); // Use JSON.stringify with 4 spaces indentation
    res.type('json').send(formattedJson);
});

router.get('/:id([0-9]{3,})',function(req,res){
    var currMovie = movies.filter(function(movie){
        if(movie.id == req.params.id){
            return true;
        }
    });
    if(currMovie.length==1){
        res.json(currMovie[0])
    }else{
        res.status(404);
        res.json({message: "Not Found"});
    }
});

router.post('/', function(req, res){
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
       
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       var newId = movies[movies.length-1].id+1;
       movies.push({
          id: newId,
          name: req.body.name,
          year: req.body.year,
          rating: req.body.rating
       });
       res.json({message: "New movie created.", location: "/movies/" + newId});
    }
 });


module.exports = router;