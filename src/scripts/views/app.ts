/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
// /* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { AppInitI } from '../globals/types';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  public _drawer: HTMLElement;

  public _content: HTMLElement;

  public _button: HTMLElement;

  constructor({ drawer, content, button }: AppInitI) {
    this._drawer = drawer;
    this._content = content;
    this._button = button;

    this._initialAppShell();
  }

  private _initialAppShell() {
    const init = new DrawerInitiator({
      drawer: this._drawer,
      content: this._content,
      button: this._button,
    });
  }
}

export default App;
