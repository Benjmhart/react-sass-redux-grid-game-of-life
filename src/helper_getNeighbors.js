export default function getNeighbors(x, y, arr) {
  const neighborsArr = [
    arr[x - 1][y],
    arr[x - 1][y - 1],
    arr[x][y - 1],
    arr[x + 1][y - 1],
    arr[x][y - 1],
    arr[x + 1][y + 1],
    arr[x][y + 1],
    arr[x - 1][y + 1]
  ];
  const neighborsQty = neighborsArr.reduce((sum, neighbor) => {
    if (neighbor === undefined) {return sum}
	const newVal = neighbor > 0 ? (sum + 1) : sum;
	return newVal;
  }, 0);
  return neighborsQty;
}
