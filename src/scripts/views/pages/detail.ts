/* eslint-disable import/extensions */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import RestaurantApiData from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { createDetailItemTemplate } from '../templates/template-creator';

class Detail {
  static async render() {
    return `
    <div class="detail-container">
    
    </div>
    `;
  }

  static async afterRender() {
    const container = document!.querySelector('.detail-container');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantApiData.getDetaolRestaurant(id!);
    container!.innerHTML = createDetailItemTemplate(restaurant);
    await this.formInit(id!);
  }

  static async formInit(id: string) {
    const form = document!.querySelector('form');
    const inputName = form?.querySelector('input');
    const inputReview = form?.querySelector('textarea');
    const submitButton = form?.querySelector('button[type="submit"]');

    submitButton?.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const name = inputName?.value;
      const review = inputReview?.value;

      if (name && review) {
        RestaurantApiData.addReviewRestaurant({ id, name, review });
      }
    });
  }
}

export default Detail;
