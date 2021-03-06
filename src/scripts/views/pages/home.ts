/* eslint-disable import/extensions */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import RestaurantApiData from '../../data/restaurant-api-source';
import { addPreLoader, preLoaderToError, removePreload } from '../../utils/pre-load-initiator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

class Home {
  static async render() {
    return `
    <!-- Hero -->
    <hero-view></hero-view>
    <!-- Kelebihan -->
    <section class="kelebihan-section">
      <div class="section-label kelebihan__label">
        <h2>Kenapa memilih tempat kami?</h2>
      </div>
      <div class="card-container">
        <div class="card-item">
          <div class="image-container">
            <img src="./images/chef.png" alt="gambar topi chef" />
          </div>
          <h3>Terupdate</h3>
          <p>Kami memastikan Informasi diperbarui secara berkala.</p>
        </div>
        <div class="card-item">
          <div class="image-container">
            <img
              src="./images/restaurant.png"
              alt="gambar piring dan sendok"
            />
          </div>
          <h3>Lengkap</h3>
          <p>
            Kami bekerja sama dengan hampir seluruh restoran di seluruh Bumi.
          </p>
        </div>
        <div class="card-item">
          <div class="image-container">
            <img src="./images/safe.png" alt="gambar perisai korona" />
          </div>
          <h3>Aman</h3>
          <p>
            Kami hanya memberikan daftar restoran dengan keamanan yang teruji.
          </p>
        </div>
      </div>
    </section>
    <!-- Daftar resto -->
    <section class="restourants-section" id="resto-list">
      <div class="section-label restaurant__label">
        <h2>Daftar restoran pilihan</h2>
      </div>
      ${addPreLoader}

      <div class="card-container restourant-list">
      </div>
    </section>
    `;
  }

  static async afterRender() {
    const listContainer = document!.querySelector('.restourant-list');
    const { restaurants } = await RestaurantApiData.getListRestoaurant();

    let tmpElm: string = '';

    if (restaurants) {
      Promise.all(
      // eslint-disable-next-line array-callback-return
        restaurants.map((restaurant: any) => {
          tmpElm += createRestaurantItemTemplate(restaurant);
        }),
      ).then(() => {
        removePreload();
        listContainer!.innerHTML = tmpElm;
      });
    } else {
      preLoaderToError('No internet access');
    }
  }
}

export default Home;
