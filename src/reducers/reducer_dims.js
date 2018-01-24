import { SET_DIMS } from "../actions/action_types";

export default function(state = { height: 20, width: 20 }, action) {
  console.log(`height Reducer Running with ${action.type}`);
  switch (action.type) {
    case SET_DIMS:
      console.log("SetDims payload received by dims reducer");
      return action.payload;
    default:
      return state;
  }
}
