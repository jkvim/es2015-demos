import './template.html';
import './index.css';
import handleClick from './handlers';

const rootDom = document.querySelector('#root');
rootDom.innerText = '点击我会弹出一个提示框.';

rootDom.addEventListener('click', handleClick);