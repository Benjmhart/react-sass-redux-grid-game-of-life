import { SET_DIMS, RANDOM_GRID, CLEAR_GRID } from "../actions/action_types";

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
    default:
      return state;
  }
}
