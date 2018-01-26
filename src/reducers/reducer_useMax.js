import { TOGGLE_USEMAX } from "../actions/action_types";

export default function(state = true, action) {
  switch (action.type) {
    case TOGGLE_USEMAX:
      const newState = !state;
      return newState;
    default:
      return state;
  }
}
