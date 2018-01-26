import { TURN_GAME_OFF, TURN_GAME_ON } from "../actions/action_types";

export default function(state = true, action) {
  console.log(`CellSize Reducer Running with ${action.type}`);
  switch (action.type) {
    case TURN_GAME_ON:
      console.log("turngameon payload received by reducer");
      return true;
    case TURN_GAME_OFF:
      console.log("turngameoff payload received by reducer");
      return false;
    default:
      return state;
  }
}
