import { SET_DIMS } from "../actions/action_types";

export default function(state = { height: 20, width: 20 }, action) {
  switch (action.type) {
    case SET_DIMS:
      return action.payload;
    default:
      return state;
  }
}
