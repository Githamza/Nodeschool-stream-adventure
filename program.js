var fs = require('fs');
var through = require('through');
var http = require('http');
var fs = require('fs');
var request = require('request');
var r = request.post('http://localhost:8000/');

process.stdin.pipe(r).pipe(process.stdout);
//process.stdin -> tr -> process.stdout

