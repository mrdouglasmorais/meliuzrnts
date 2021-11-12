import {Reducer} from 'redux';
import {IGlobalStoreId} from '../Types';

const INITIAL_STATE: IGlobalStoreId = {
  store_id: 1,
};

const GlobalStoreID: Reducer<IGlobalStoreId | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'SET': {
      const {store_id} = action.payload;
      return {
        ...state,
        store_id,
      };
    }
    default: {
      return state;
    }
  }
};

export default GlobalStoreID;
