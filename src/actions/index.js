import {
  SET_DIMS,
  TOGGLE_USEMAX,
  CHANGE_RATE,
  RANDOM_GRID,
  CLEAR_GRID,
  SET_DENSITY,
  SET_CELLSIZE,
  INCREMENT_CYCLES,
  RESET_CYCLES
} from "./action_types";

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

export function changeRate(rate) {
  const payload = rate < 150 ? 150 : rate;
  return {
    type: CHANGE_RATE,
    payload
  };
}

export function randomGrid(arr, density) {
  console.log(density);
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
