const jsonServer = require('json-server');
const server = jsonServer.create();

server.use('/hello', (req, res) => {
    res.jsonp('hello world');
    res.end();
});

server.use(jsonServer.bodyParser);
server.use('/form', (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body
        res.jsonp(`Hi ${name}, your email is ${email}.`)
    }
    res.end();
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});