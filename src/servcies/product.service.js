import {HTTPClient} from './client';

async function getSingle(id) {
  return await HTTPClient.get(`${id}`);
}
async function getAllProducts() {
  return await HTTPClient.get('products');
}
export {getSingle, getAllProducts};
