let express = require('express'); // imported
let app = express();  // make our own instance to use express
// let router = express.Router();

app.use(express.json())



app.get('/test', function(req, res) {
    console.log(req.body);
    res.send('This is GET!');
});

app.get('/home', (req, res) => {
    console.log(__dirname)
    // thiss file send back a file in the curren t directory (__directory), followed by the path to the file we want to send
    res.sendFile(__dirname + '/static.html');
});

app.post('/home', function(req, res) {
    console.log(req.body);
    res.send('This is POST!');
});


// app.use('/home', function(req, res) {
//     console.log(req.body);
//     res.send('This is home!');
// });

app.listen(4000, function() {
    console.log('App is listening on port 4000')
})