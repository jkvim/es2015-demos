import './template.html';
import './index.css';
import 'babel-polyfill';
import handleClick from './handlers';

const rootDom = document.querySelector('#root');
rootDom.innerText = '点击我判断数字8是否在数组[1,2,3,4,5]中.';

rootDom.addEventListener('click', handleClick);