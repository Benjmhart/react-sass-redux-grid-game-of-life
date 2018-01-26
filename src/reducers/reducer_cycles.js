import {
  INCREMENT_CYCLES,
  RESET_CYCLES,
  SET_DIMS
} from "../actions/action_types";

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_CYCLES: {
      const newState = state + 1;
      return newState;
    }
    case RESET_CYCLES:
      return 0;
    case SET_DIMS:
      return 0;
    default:
      return state;
  }
}
