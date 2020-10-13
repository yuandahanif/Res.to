/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */

// Dependency
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';

// components
import './components/skipToContent-view';
import './components/header-view';
import './components/hero-view';
import './components/footer-view';

// css
import '../styles/main.scss';

import App from './views/app';

const app = new App({
  drawer: document!.querySelector('nav.drawer'),
  content: document!.querySelector('main'),
  button: document!.querySelector('button.hamburger-button'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
