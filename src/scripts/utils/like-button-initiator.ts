/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import FavoriteRestaurant from '../data/favoriteRestaurant-idb';
import { createDislikeButtonTemplate, createLikeButtonTemplate } from '../views/templates/template-creator';

interface initprops {
  likeButtonContainer: HTMLElement | null;
  resto: any;
}

class LikeButtonInitiator {
  static _likeButtonContainer: any;

  static _resto: any;

  static async init({ likeButtonContainer, resto }: initprops) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  }

  static async _renderButton() {
    const { id } = this._resto;

    if (await this._isMovieExist(id)) {
      this._renderDislike();
    } else {
      this._renderLike();
    }
  }

  static async _isMovieExist(id: string) {
    const resto = await FavoriteRestaurant.getResto(id);
    return resto;
  }

  static async _renderDislike() {
    this._likeButtonContainer.innerHTML = createDislikeButtonTemplate;

    const likeButton = document.querySelector('#likeButton');
    likeButton!.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteResto(this._resto.id);
      this._renderButton();
    });
  }

  static async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate;

    const likeButton = document.querySelector('#likeButton');
    likeButton!.addEventListener('click', async () => {
      await FavoriteRestaurant.putResto(this._resto);
      this._renderButton();
    });
  }
}

export default LikeButtonInitiator;
