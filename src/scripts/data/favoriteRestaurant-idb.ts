/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class FavoriteRestaurant {
  static async getResto(id: string) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  }

  static async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  }

  static async putResto(resto: any) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  }

  static async deleteResto(id: string) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  }
}

export default FavoriteRestaurant;
