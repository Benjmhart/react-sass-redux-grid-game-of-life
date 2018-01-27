import {
  SET_DIMS,
  TOGGLE_USEMAX,
  CHANGE_RATE,
  RANDOM_GRID,
  CLEAR_GRID,
  SET_DENSITY,
  SET_CELLSIZE,
  INCREMENT_CYCLES,
  RESET_CYCLES,
  ACTIVATE_CELL,
  TURN_GAME_ON,
  TURN_GAME_OFF
} from "./action_types";
//called when the game starts, when the window is resized, or whenever the user changes dimensions
export function setDims(height, width, density) {
  const payload = {
    height,
    width,
    density
  };
  return {
    type: SET_DIMS,
    payload
  };
}

export function toggleUseMax() {
  return {
    type: TOGGLE_USEMAX
  };
}
//the rate of the game,  cannot be below 300ms for performance reasons
export function changeRate(rate) {
  const payload = rate < 300 ? 300 : rate;
  return {
    type: CHANGE_RATE,
    payload
  };
}

export function randomGrid(arr, density) {
  return {
    type: RANDOM_GRID,
    payload: density
  };
}

export function setDensity(payload) {
  return {
    type: SET_DENSITY,
    payload
  };
}

export function clearGrid() {
  return {
    type: CLEAR_GRID
  };
}

export function setCellSize(value) {
  const payload = value < 15 ? 15 : value;
  return {
    type: SET_CELLSIZE,
    payload
  };
}

export function resetCycles() {
  return { type: RESET_CYCLES };
}

export function incrementCycles() {
  return { type: INCREMENT_CYCLES };
}

export function activateCell(x, y) {
  return {
    type: ACTIVATE_CELL,
    payload: { x, y }
  };
}
export function turnGameOn() {
  return { type: TURN_GAME_ON };
}

export function turnGameOff() {
  return { type: TURN_GAME_OFF };
}
