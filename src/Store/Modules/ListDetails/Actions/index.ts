import {IGlobalStoreId} from '../Types';

export function setNewStoreID(storeId: IGlobalStoreId) {
  return {
    type: 'SET',
    payload: storeId,
  };
}
