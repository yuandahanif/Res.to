/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import swRegister from './utils/sw-register';

// Dependency

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
  debugMode: !true, // TODO: dont forget to set to false in production.
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
