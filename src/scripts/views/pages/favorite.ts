/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import FavoriteRestaurant from '../../data/favoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

/* eslint-disable no-tabs */
class Favorite {
  static async render() {
    return `
      <div class="favorite-container" id="resto-list">
				<h1>Daftar restoran favorit anda</h1>

				<div class="card-container" ></div>
			</div>`;
  }

  static async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllResto();
    const restoContainer = document.querySelector('#resto-list .card-container');

    if (restaurants.length < 1) {
      restoContainer!.innerHTML = '<h2>Belum ada restoran favorit</h2>';
    } else {
      restaurants.forEach((restaurant) => {
        restoContainer!.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  }
}

export default Favorite;
