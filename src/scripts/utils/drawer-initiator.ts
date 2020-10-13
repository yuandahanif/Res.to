/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { AppInitI } from '../globals/types';

class DrawerInitiator {
  public drawer: HTMLElement | null;

  constructor({ drawer, content, button }: AppInitI) {
    this.drawer = drawer;

    content!.addEventListener('click', (event) => {
      event.stopPropagation();
      this._closeDrawer();
    });

    button!.addEventListener('click', (event) => {
      event.preventDefault();
      this._toogleDrawer();
    });
  }

  private _toogleDrawer() {
    this.drawer!.classList.toggle('open');
  }

  private _closeDrawer() {
    this.drawer!.classList.remove('open');
  }
}

export default DrawerInitiator;
