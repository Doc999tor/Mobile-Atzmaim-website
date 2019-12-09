import { h, render } from 'preact';
import { App } from './App';
import './styles/index.css'
import qs from 'qs';
import { config }from '../components-lib/Home_website/config_ssr.js';
document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
render(<App />, document.body, document.getElementById('app'));
