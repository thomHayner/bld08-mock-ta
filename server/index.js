const express = require('express');
const cors = require('cors')
const parse = require('body-parser')

const app = express();
const port = 8080;

app.use(parse.json())

// create an entry in the database
app.post('/api/cows', function(req, res){

    // req - the data to add to the db

    // res - a string containing a confirmation / success message

    res.send(`this is what you sent to the server: name = ${req.body.name}, descrtption = ${req.body.description}`)

})

// retrieve data from the database
app.get('/api/cows', function(req, res){

    // req - the data which the client would like to check the db for
    // res - the data requested by the client (if the db contained requested data)
    //       a string containing a confirmation / success message

    res.send('Hello')

})

// // update an existing database entry
// app.put('/db', req, res, next) = {

//     // req - the data to be replaced and the data to replace it with
//     // res - a string containing a confirmation / success message

// }

// // delete an existing entry from the database
// app.delete('/db', req, res, next) = {
    
//     // req - the data which the client would like to delete
//     // res - a string containing a confirmation / success message

// }

app.listen(port, () => console.log(`Server is running on port ${port}`));