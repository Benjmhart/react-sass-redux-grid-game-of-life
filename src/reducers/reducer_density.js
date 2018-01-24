import { SET_DENSITY } from "../actions/action_types";

export default function(state = 50, action) {
  console.log(`Density Reducer Running with ${action.type}`);
  switch (action.type) {
    case SET_DENSITY:
      console.log("SetDensity payload received by reducer");
      return action.payload;
    default:
      return state;
  }
}
