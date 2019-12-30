import { RETRIEVE_SET_NAMES } from '../types/assorted-data-types';


const initState = {
  setNames: []
};

export default function assortedDataReducer(state = initState, action) {
  switch(action.type) {
    case RETRIEVE_SET_NAMES: {
      console.log('PAYLOAD', action.payload);
      return { ...state, setNames: action.payload };
    }
    default: return state;
  }
}
