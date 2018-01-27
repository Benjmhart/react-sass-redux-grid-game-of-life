import { combineReducers } from "redux";
import UseMaxReducer from "./reducer_useMax";
import DimsReducer from "./reducer_dims";
import RateReducer from "./reducer_rate";
import LifeGridReducer from "./reducer_lifeGrid";
import DensityReducer from "./reducer_density";
import CellSizeReducer from "./reducer_cellSize";
import CyclesReducer from "./reducer_cycles";
import gameOnReducer from "./reducer_gameOn";

const rootReducer = combineReducers({
  useMax: UseMaxReducer, //whether or not the maximum dimensions will be used bool
  dims: DimsReducer, //the current dimensions of the array, object, has height & width properties which are both numbers
  rate: RateReducer, // the rate that controls the flow of time in game,  number
  lifeGrid: LifeGridReducer, // 2d array of variable dimensions which drives the game,   values include 0-dead 1-baby and 2-alive
  density: DensityReducer, // the odds of a cell being alive whenever a randomize function is called, number
  cellSize: CellSizeReducer, // the minimum square dimension of an individual cell (used in css and calculations), number
  cycles: CyclesReducer, // the number of cycles that have elapsed since the game began. number
  gameOn: gameOnReducer // is the game running?   boolean.
});

export default rootReducer;
