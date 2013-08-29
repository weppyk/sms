#!/usr/bin/env node

var url = require('url');
var url_parts =url.parse(request.url,true);
var query = url_parts.query;
var app = require('express');

app.post('/', function(request, response) {
    console.log(request.body.number);
    console.log(request.body.message);
}

console.log(query);

var number= +420722118864;
var message = "Hello word to your mobile";

var smssend= function(number,message) {
    console.log(number,message);
}
smssend(number,message);
