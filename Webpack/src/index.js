import './index.less';
import Navigo from 'navigo';
import Home from './view/home.html';
import Error from './view/error.html';

const app = document.getElementById('app');
const router = new Navigo(null, true, '#');

router.on('/', function () {
    app.innerHTML = Home
}).resolve();

router.notFound(function () {
    app.innerHTML = Error
}).resolve();
