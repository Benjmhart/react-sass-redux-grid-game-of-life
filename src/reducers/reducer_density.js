import { SET_DENSITY } from "../actions/action_types";

export default function(state = 50, action) {
  switch (action.type) {
    case SET_DENSITY:
      return action.payload;
    default:
      return state;
  }
}
