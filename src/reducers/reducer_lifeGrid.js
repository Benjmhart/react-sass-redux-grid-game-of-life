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
      // THINGS!
      const grid = [...state];
      const futureGrid = grid.map((row, x) => {
        return row.map((cell, y) => {
          const neighbors = getNeighbors(x, y, grid);
          let newVal;
          // survivor
          if (cell > 0 && (neighbors === 3 || neighbors === 2)) {
            newVal = 2;
          }
          // death
          else if (cell > 0 && (neighbors < 2 || neighbors > 3)) {
            newVal = 0;
          }
          // birth
          else if (cell === 0 && neighbors === 3) {
            newVal = 1;
          }
          // stay dead
          else if (cell === 0 && (neighbors <3 || neighbors>3)) {
            newVal = 0;
          }
            console.log(` modified cell ${x}, ${y} value: ${newVal} original cell value: ${cell} and  neighbors:${neighbors}`)
          
          return newVal;
        });
      });
      return futureGrid;
    }
    default:
      return state;
  }
}
