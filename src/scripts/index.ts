/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */

// Dependency
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';

import '../styles/main.scss';

import App from './views/app';

const app = new App({
  drawer: document!.querySelector('nav.drawer'),
  content: document!.querySelector('main, footer'),
  button: document!.querySelector('button.hamburger-button'),
});
