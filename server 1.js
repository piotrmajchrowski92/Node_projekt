const http = require('http');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {'Contant-type':'text/html'});
        res.write('<h1>Start</h1>');
        res.end();
    } else if (req.url === '/form') {
        res.writeHead(200, {'Contant-type':'text/html'});
        res.write('<h1>Formularz rejestracyjny</h1>');
        res.end();
    } else if (req.url === '/api') {
        res.writeHead(200, {'Contant-type':'text/html'});
        res.write('<h1>Aplikacja pogodowa</h1>');
        res.end();
    } else {
        res.writeHead(404, {'Contant-type':'text/html'});
        res.write('<p>Strona nie istnieje</p>');
        res.end();
    }

}).listen(3000, () => {
    console.log("Serwer słucha na porcie 3000...");
})