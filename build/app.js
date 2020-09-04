"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = process.env.PORT || '3000';
app.get('/', function (req, res) {
    res.send('Hello, again!');
});
app.post('/greeter', function (req, res) {
    console.log(req);
    res.send("Hello");
});
app.listen(PORT, function () {
    console.log("Server listening on " + PORT);
});
