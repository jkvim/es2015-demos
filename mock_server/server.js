const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const heros = require('./heros')

server.use(middlewares);
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

server.use('/heros', (req, res) => {
    const { keyword } = req.query;
    const result = keyword ? heros.filter(hero => hero.name.indexOf(keyword) > -1) : []
    res.jsonp(result);
    res.end();
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});