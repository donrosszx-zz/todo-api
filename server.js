var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
    res.json(todos);
});

app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var match;
    // iterate over todos area.  find the match
    todos.forEach(function (todo) {
        if (todo.id === todoId) {
            match = todo;
        }
    });
    // res.send(typeof match);
    if (match) {
        res.json(match);
    } else {
        res.status(404).send();
    }
});

// POST /todos but data in JSON/string form is sent
app.post('/todos', function (req, res) {
    var body = req.body;
    // add id field
    // push body into array
    body.id = todoNextId;
    todos.push(body);
    todoNextId++;

    res.json(body);
});

app.listen(PORT, function () {
    console.log("Express listening on PORT " + PORT);
});