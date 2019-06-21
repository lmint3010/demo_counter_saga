import { INCREASE, DECREASE } from "../actions/constant";

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}
