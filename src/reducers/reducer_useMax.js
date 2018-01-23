import { TOGGLE_USEMAX } from "../actions/action_types";

export default function(state = true, action) {
  console.log(`useMax Reducer Running with ${action.type}`);
  switch (action.type) {
    case TOGGLE_USEMAX:
      console.log("Toggle_UseMax payload received by reducer");
      const newState = !state;
      return newState;
    default:
      return state;
  }
}
