import { CHANGE_NAME_VAL, CHANGE_TYPE_VAL, CHANGE_TEXT_VAL, CHECK_BLACK_MANA, CHECK_WHITE_MANA, CHECK_RED_MANA, CHECK_GREEN_MANA, CHECK_BLUE_MANA, CHECK_EXACT_COLORS, CHECK_EXCLUDE_COLORS } from '../types/searchFormTypes';

const init = {
  cardName: '',
  typeLine: '',
  cardText: '',
  black: false,
  white: false,
  red: false,
  green: false,
  blue: false,
  exact: false,
  exclude: false
};

export default function searchFormReducer(state = init, action) {
  switch(action.type) {
    case CHANGE_NAME_VAL: return {
      ...state,
      cardName: action.payload
    };
    case CHANGE_TYPE_VAL: return {
      ...state,
      typeLine: action.payload
    };
    case CHANGE_TEXT_VAL: return {
      ...state,
      cardText: action.payload
    };
    case CHECK_BLACK_MANA: return {
      ...state,
      black: !state.black
    };
    case CHECK_WHITE_MANA: return {
      ...state,
      white: !state.white
    };
    case CHECK_RED_MANA: return {
      ...state,
      red: !state.red
    };
    case CHECK_GREEN_MANA: return {
      ...state,
      green: !state.green
    };
    case CHECK_BLUE_MANA: return {
      ...state,
      blue: !state.blue
    };
    case CHECK_EXACT_COLORS: return {
      ...state,
      exact: !state.exact
    };
    case CHECK_EXCLUDE_COLORS: return {
      ...state,
      exclude: !state.exclude
    };
      
    default: return state;
  }
} 
