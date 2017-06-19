import 'babel-polyfill';
import './index.scss';

const rootDom = document.querySelector('#root');
rootDom.innerText = '这段文字来自于index.js文件.';