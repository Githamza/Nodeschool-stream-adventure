var fs = require('fs');
var through = require('through');
var tr = through(write, end);
var split = require('split');
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
// fs.createReadStream(process.argv[2])
var pair = false

function write(buf) {
    this.queue(buf.toString()[(pair = !pair) ? 'toLowerCase' : 'toUpperCase']() + '\n');
}
function end() { this.queue(null) }
//process.stdin -> tr -> process.stdout


