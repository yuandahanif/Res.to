/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantApiData {
  static async getListRestoaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async getDetaolRestaurant(id: string | number) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async addReviewRestaurant({ id, name, review }: {[key: string]: string}) {
    try {
      const body = JSON.stringify({
        id,
        name,
        review,
      });

      await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.API_KEY,
        },
        body,
      });

      alert('Review berhasil ditambahkan');
      return true;
    } catch (error) {
      alert('Review gagal ditambahkan');
      return false;
    }
  }
}

export default RestaurantApiData;
