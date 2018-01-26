import { CHANGE_RATE } from "../actions/action_types";

export default function(state = 1000, action) {
  switch (action.type) {
    case CHANGE_RATE:
      return action.payload;
    default:
      return state;
  }
}
