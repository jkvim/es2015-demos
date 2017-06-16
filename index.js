require('./template.html');
require('./index.css');

const handleClick = require('./handlers')

const rootDom = document.querySelector('#root');
rootDom.innerText = '点击我会弹出一个提示框.';

rootDom.addEventListener('click', handleClick);