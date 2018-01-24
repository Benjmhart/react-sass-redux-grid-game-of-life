import { SET_CELLSIZE } from "../actions/action_types";

export default function(state = 40, action) {
  console.log(`CellSize Reducer Running with ${action.type}`);
  switch (action.type) {
    case SET_CELLSIZE:
      console.log("SetCellSize payload received by reducer");
      return action.payload;
    default:
      return state;
  }
}
