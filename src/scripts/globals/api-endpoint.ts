/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.API_ENDPOINT}/list`,
  DETAIL_RESTAURANT: (id: string | number) => `${CONFIG.API_ENDPOINT}/detail/${id}`,
  SEARCH_RESTAURANT: (name: string) => `${CONFIG.API_ENDPOINT}/search?q=${name}`,
  ADD_REVIEW: `${CONFIG.API_ENDPOINT}/review`,
  SMALL_IMAGE: (id: string | number) => `${CONFIG.SMALL_IMAGE_URL}/${id}`,
  MEDIUM_IMAGE: (id: string | number) => `${CONFIG.MEDIUM_IMAGE_URL}/${id}`,
  LARGE_IMAGE: (id: string | number) => `${CONFIG.LARGE_IMAGE_URL}/${id}`,
};

export default API_ENDPOINT;
