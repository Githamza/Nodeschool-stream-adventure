var fs = require('fs');
var through = require('through');
var tr = through(write, end);
process.stdin.pipe(tr).pipe(process.stdout);
// fs.createReadStream(process.argv[2])
function write(buf) { this.queue(buf.toString().toUpperCase())}
function end() { this.queue(null) }
//process.stdin -> tr -> process.stdout
