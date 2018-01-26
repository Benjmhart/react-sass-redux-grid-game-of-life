import { SET_CELLSIZE } from "../actions/action_types";

export default function(state = 40, action) {
  switch (action.type) {
    case SET_CELLSIZE:
      return action.payload;
    default:
      return state;
  }
}
