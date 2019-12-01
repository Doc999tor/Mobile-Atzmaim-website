import { h, render } from 'preact';
import { App } from './App';
import './styles/main.css'
import qs from 'qs';
import { config }from '../config.js';
document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
render(<App />, document.body, document.getElementById('app'));
