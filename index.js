import 'babel-polyfill';
import './index.scss';

const rootDom = document.querySelector('#root');
rootDom.innerText = '这段文字来自于index.js文件.';
if ('production' !== process.env.NODE_ENV) {
    console.info(`下面的彩色字体只在非production环境显示，\n不信的话你build一份试试...`);
    console.log('%c' + process.env.NODE_ENV, 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
}
