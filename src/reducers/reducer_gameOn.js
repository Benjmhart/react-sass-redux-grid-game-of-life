import { TURN_GAME_OFF, TURN_GAME_ON } from "../actions/action_types";

export default function(state = true, action) {
  switch (action.type) {
    case TURN_GAME_ON:
      return true;
    case TURN_GAME_OFF:
      return false;
    default:
      return state;
  }
}
