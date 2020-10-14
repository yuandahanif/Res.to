/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import API_ENDPOINT from '../globals/api-endpoint';

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
}

export default RestaurantApiData;
