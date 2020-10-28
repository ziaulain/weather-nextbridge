const path = require('path')
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));
app.use(bodyParser.json());


app.get('', (req, res) => { 
    // req = request
    // res = respond
    console.log(req.query);
    res.send("Hello")
});

app.get('/weather', (req, res) => { 
    // req = request
    // res = respond
    console.log();
    res.send(req.params.id);
});

app.get('/weather/:id', (req, res) => { 
    // req = request
    // res = respond
    console.log(req.params.id);
    res.send(req.params.id);
});

app.post('/weather', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send({"Title": "My Backend", "desc": "My Backend desciption",});
});

app.put('/weather/:id', (req, res) => { 
    console.log(req.body);
    console.log(req.params.id);
    res.send(req.params.id);
});

app.delete('/weather/:id', (req, res) => { 
    console.log(req.params.id);
    res.send(req.params.id);
});



app.listen(8080, () => {
    console.log("Server is up and runing!")
});