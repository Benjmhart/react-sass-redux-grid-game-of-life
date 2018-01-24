import { INCREMENT_CYCLES, RESET_CYCLES } from "../actions/action_types";

export default function(state = 0, action) {
  console.log(`Cycles Reducer Running with ${action.type}`);
  switch (action.type) {
    case INCREMENT_CYCLES:
      console.log("Increment Cycles payload received by reducer");
      const newState = state + 1;
      return newState;
    case RESET_CYCLES:
      console.log("Reset Cycles payload received by reducer");
      return 0;
    default:
      return state;
  }
}
