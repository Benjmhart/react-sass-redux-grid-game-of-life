import { combineReducers } from "redux";
import MaxDimsReducer from "./reducer_maxDims";
import UseMaxReducer from "./reducer_useMax";
import HeightReducer from "./reducer_height";
import WidthReducer from "./reducer_width";
import RateReducer from "./reducer_rate";

const rootReducer = combineReducers({
  maxDims: MaxDimsReducer,
  useMax: UseMaxReducer,
  height: HeightReducer,
  width: WidthReducer,
  rate: RateReducer
});

export default rootReducer;
