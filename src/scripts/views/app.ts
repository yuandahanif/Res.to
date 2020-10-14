/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
// /* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { AppInitI } from '../globals/types';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  public _drawer: HTMLElement | null;

  public _content: HTMLElement | null;

  public _button: HTMLElement | null;

  public _debugMode: boolean;

  constructor({
    drawer, content, button, debugMode = false,
  }: AppInitI) {
    this._drawer = drawer;
    this._content = content;
    this._button = button;
    this._debugMode = debugMode;

    this._initialAppShell();
  }

  private _initialAppShell() {
    const init = new DrawerInitiator({
      drawer: this._drawer,
      content: this._content,
      button: this._button,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (this._content) {
      if (!this._debugMode) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      }
    }
  }
}

export default App;
