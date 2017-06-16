const jsonServer = require('json-server');
const server = jsonServer.create();

server.use('/hello', (req, res) => {
    res.jsonp('hello world');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});