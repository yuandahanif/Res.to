/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-tabs */
import { stringLimiter } from '../utils/random-string';
import { randomUserAvatar } from './avatar-component';

const reviewListItems = (reviews: any[]): string => {
  let strTmp = '';
  reviews.forEach((review: { name: any; date: any; review: any; }) => {
    strTmp += `
    <div class="card-item review-card">
    <div class="review-card-profile">
      <figure>
        <img
          src="${randomUserAvatar()}"
          alt="${stringLimiter(review.name, 14)}"
        />
      </figure>
      <div class="review-card-profile-info">
        <h3>${stringLimiter(review.name, 14)}</h3>
        <span>${review.date}</span>
        <div class="review-card-description">
          <p>
            ${review.review}
          </p>
        </div>
      </div>
    </div>
    </div>`;
  });
  return strTmp;
};
const foodListItems = (foods: { name: any; }[]): string => {
  let strTmp = '';
  foods.forEach((food: { name: any; }) => {
    strTmp += `
    <div class="card-item desc-food" role="listitem">
				<i class="fas fa-utensils"></i> <span role="listitem">${food.name}</span>
			</div>`;
  });

  return strTmp;
};

const drinkListItems = (drinks: { name: any; }[]): string => {
  let strTmp = '';
  drinks.forEach((drink: { name: any; }) => {
    strTmp += `
    <div class="card-item desc-drink">
				<i class="fas fa-coffee"></i> <span>${drink.name}</span>
			</div>`;
  });

  return strTmp;
};

const categoryListItem = (categories: { name: any; }[]): string => {
  let strTmp = '';
  categories.forEach((category: { name: any; }) => {
    strTmp += `<span>${category.name}</span>`;
  });

  return strTmp;
};

export {
  reviewListItems, foodListItems, drinkListItems, categoryListItem,
};
