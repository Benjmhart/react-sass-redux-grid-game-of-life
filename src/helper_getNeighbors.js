export default function getNeighbors(x, y, arr) {
  const neighborsQty = arr.reduce((totalSum, row, rowIndex) => {
    if (rowIndex > x + 1 || rowIndex < x - 1) {
      return totalSum;
    }
    const rowTotal = row.reduce((rowSum, cell, columnIndex) => {
      if (columnIndex > y + 1 || columnIndex < y - 1) {
        return rowSum;
      }
      if (columnIndex === y && rowIndex === x) {
        return rowSum;
      }
      if (cell > 0) {
        return rowSum + 1;
      }
      return rowSum;
    }, 0);
    return rowTotal + totalSum;
  }, 0);
  return neighborsQty;
}
