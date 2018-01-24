import { combineReducers } from "redux";
import UseMaxReducer from "./reducer_useMax";
import DimsReducer from "./reducer_dims";
import RateReducer from "./reducer_rate";
import LifeGridReducer from "./reducer_lifeGrid";
import DensityReducer from "./reducer_density";
import CellSizeReducer from "./reducer_cellSize";
import CyclesReducer from "./reducer_cycles";

const rootReducer = combineReducers({
  useMax: UseMaxReducer,
  dims: DimsReducer,
  rate: RateReducer,
  lifeGrid: LifeGridReducer,
  density: DensityReducer,
  cellSize: CellSizeReducer,
  cycles: CyclesReducer
});

export default rootReducer;
