const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

// problem 1
router.get('/Movies', function (req, res){
  //  console.log("The path params in the request are : ", req.params)
    let Movies= ['Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    
    res.send(Movies)
})
// problem 2
router.get('/movies/:index', function(req, res){

   console.log("list of movies ." , req.params)

   let  list_of_movies = ["Rang de basanti" , "The shining" , "Lord of the rings" , "Batman begins"]
    let index = req.params.index
    res.send(list_of_movies[index])
})
// problem 3

router.get('/movies/:index', function(req, res){

    let  moviesCollection = ["Rang de basanti" , "The shining", "Lord of the rings" , "Batman begins"]
     const index = req.params 

     
    if(index>=moviesCollection.length)
    {
        res.send("use a valid index in an error message")
    }
    else{
        res.send(moviesCollection[index])
    }
    
})
// problem 4
router.get('/movies_object', function(req, res){
    console.log("list of movies." , req.params)
    const  list_of_movies_object = [ 
       { "id": 1,"name": "The Shining"}, {
        "id": 2,
        "name": "Incendies"
       }, {
       "id": 3,
        "name": "Rang de Basanti"
      }, {
        "id": 4,
        "name": "Finding Nemo"
       }
    ]
       
       
    res.send(list_of_movies_object)
})
// problem 5
router.get('/films/:filmid', function(req, res){

    let film = [ 
      { "id": 1,
      "name": "The Shining"},
       {
        "id": 2,
         "name": "Incendies"
        }, 
        {
         "id": 3,
         "name": "Rang de Basanti"
        },
        {
         "id": 4,
         "name": "Finding Nemo"
       }
     ]
     let  index = req.params 

     let count=0
     for(let i=0;i<film.length;i++)
     {
        if(film[i].id== Number(index.filmid))
        {
            count++
            res.send(film[i])
        }
     }
     if(count==0)
     {
        res.send("No movie exists with this id")
     }
    })





     
     
    

// Example 1 for path params

router.get('/Movies/:Movies name', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams['Movies name'])
})

// Example 2 for path params


router.get('/Movies-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let Moviename= requestParams.name
    console.log('Name of the Movie is ', Moviename)
    res.send('Dummy response')
})

module.exports = router;