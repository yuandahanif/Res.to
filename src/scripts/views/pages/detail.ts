/* eslint-disable import/extensions */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import { reviewListItems } from '../../components/detail-component-template';
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

    await this.setReview(restaurant.consumerReviews);
    await this.formInit({ id: id!, reviews: restaurant.consumerReviews });
  }

  static async setReview(reviews: any[]) {
    const reviewContainer = document!.querySelector('.review-section .card-container');
    reviewContainer!.innerHTML = reviewListItems(reviews);
  }

  static async formInit({ id, reviews }: {[key: string] : any}) {
    const form = document!.querySelector('form');
    const inputName = form?.querySelector('input');
    const inputReview = form?.querySelector('textarea');
    const submitButton = form?.querySelector('button[type="submit"]');

    const clearForm = () => {
      inputName!.value = '';
      inputReview!.value = '';
    };

    submitButton?.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const name = inputName?.value;
      const review = inputReview?.value;

      if (name && review) {
        if (await RestaurantApiData.addReviewRestaurant({ id, name, review })) {
          this.setReview([...reviews, { name, review, date: 'Baru saja' }]);
          clearForm();
        }
      }
    });
  }
}

export default Detail;
