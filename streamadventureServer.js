var fs = require('fs');
var through = require('through');
var tr = through(write, end);
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(tr).pipe(fs.createWriteStream('post.txt'));
    }
    res.end('beep boop\n');
});
server.listen(process.argv[2]);

function write(buf) {
    this.queue((buf.toString().toUpperCase()));
}
function end() { this.queue(null) }
//process.stdin -> tr -> process.stdout

