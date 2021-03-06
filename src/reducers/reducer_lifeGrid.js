import {
  SET_DIMS,
  RANDOM_GRID,
  CLEAR_GRID,
  ACTIVATE_CELL,
  INCREMENT_CYCLES
} from "../actions/action_types";
import getNeighbors from "../helper_getNeighbors";
// randomizes a board,  used in several cases
function randomize(arr, density) {
  const choices = [0, 2];
  const newGrid = arr.map(row =>
    row.map(() => {
      const choice = choices[Math.floor(Math.random() * (density * 0.02) * 2)];
      if (choice === undefined) {
        return 2;
      }
      return choice;
    })
  );
  return newGrid;
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_DIMS: {
      const { height, width, density } = action.payload;
      const heightGrid = new Array(height);
      const widthGrid = new Array(width);
      const widthGridFilled = widthGrid.fill(0);
      const lifeGrid = heightGrid.fill(widthGridFilled);
      return randomize(lifeGrid, density);
    }
    case RANDOM_GRID: {
      const newgrid = [...state];
      return randomize(newgrid, action.payload);
    }
    case CLEAR_GRID: {
      const newgrid = [...state];
      const clearedgrid = newgrid.map(row => row.map(() => 0));
      return clearedgrid;
    }
    case ACTIVATE_CELL: {
      const { x, y } = action.payload;
      const newgrid = [...state];
      newgrid[x][y] = newgrid[x][y] === 0 ? 2 : 0;
      return newgrid;
    }
    case INCREMENT_CYCLES: {
      // all of the events that happen when the timer elapses, moves the game forward one generation
      // X = ROWS STARTING AT TOP=0 Y=COLUMNS STARTING AT LEFT=0 
      const grid = [...state];
      const futureGrid = grid.map((row, x) =>
        row.map((cell, y) => {
          const neighbors = getNeighbors(x, y, grid);
          let newVal;
          // survivor, else death, else newborn, else stay dead
          if (cell > 0 && (neighbors === 3 || neighbors === 2)) {
            newVal = 2;
          } else if (cell > 0 && (neighbors < 2 || neighbors > 3)) {
            newVal = 0;
          } else if (cell === 0 && neighbors === 3) {
            newVal = 1;
          } else if (cell === 0 && (neighbors < 3 || neighbors > 3)) {
            newVal = 0;
          }
          return newVal;
        })
      );
      return futureGrid;
    }
    default:
      return state;
  }
}
