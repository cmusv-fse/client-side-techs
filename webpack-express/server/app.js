const http = require('http');
const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const path = require('path');
const socketio = require('socket.io');
const apiRoutes = require('./routes/api');
const handle500Error = require('./middlewares/handle500Error');

const app = express();

app
  .use(express.static(path.resolve(__dirname, '../public')))
  .set('view engine', 'ejs')
  .set('views', path.resolve(__dirname, './views'))
  .use(ejsLayout)
  .set('layout extractScripts', true)
  .get('/', (req, res) => res.render('home'))
  .get('/pageOne', (req, res) => res.render('pageOne'))
  .get('/pageTwo', (req, res) => res.render('pageTwo'))
  .use('/api', apiRoutes)
  .use(handle500Error);

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', () => {
  console.log('connected');
})

server.listen(3001, () => {
  console.log('server started at port 3001')
})
