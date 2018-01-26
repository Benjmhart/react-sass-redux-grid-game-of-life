import {
  SET_DIMS,
  RANDOM_GRID,
  CLEAR_GRID,
  ACTIVATE_CELL,
  INCREMENT_CYCLES
} from "../actions/action_types";
import getNeighbors from "../helper_getNeighbors";

function randomize(arr, density) {
  const choices = [0, 2];
  const newGrid = arr.map(row =>
    row.map(cell => {
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
  console.log(`grid Reducer Running with ${action.type}`);
  switch (action.type) {
    case SET_DIMS: {
      console.log("SETDIMS payload received by grid reducer");
      const { height, width, density } = action.payload;
      console.log(height, width, density);
      const heightGrid = new Array(height);
      const widthGrid = new Array(width);
      console.log(widthGrid);
      const widthGridFilled = widthGrid.fill(0);
      console.log(widthGridFilled);
      const lifeGrid = heightGrid.fill(widthGridFilled);
      console.log(lifeGrid);
      return randomize(lifeGrid, action.payload.density);
    }
    case RANDOM_GRID: {
      console.log("RandomGrid payload received by grid reducer");
      const newgrid = [...state];
      return randomize(newgrid, action.payload);
    }
    case CLEAR_GRID: {
      console.log("clearGrid payload received by grid reducer");
      const newgrid = [...state];
      const clearedgrid = newgrid.map(row => row.map(() => 0));
      return clearedgrid;
    }
    case ACTIVATE_CELL: {
      console.log("activateCell payload received by grid reducer");
      const { x, y } = action.payload;
      const newgrid = [...state];
      newgrid[x][y] = newgrid[x][y] === 0 ? 2 : 0;
      return newgrid;
    }
    case INCREMENT_CYCLES: {
      // THINGS!
      const grid = [...state];
      const futureGrid = grid.map((row, y) => {
        return row.map((cell, x) => {
          const neighbors = getNeighbors(x, y, grid);
          if (cell > 0 && neighbors === 3) {
            return 3;
          }
          if (cell > 0 && neighbors < 1 && neighbors > 4) {
            return 2;
          }
          if (cell > 0 && neighbors > 3) {
            return 3;
          }
          if (cell === 0 && neighbors === 3) {
            return 4;
          }
        });
      });
      const reducedGrid = futureGrid.map(row => {
        return row.map(cell => {
          if (cell > 2) {
            return cell - 3;
          }
          return cell;
        });
      });
      return reducedGrid;
    }
    default:
      return state;
  }
}
