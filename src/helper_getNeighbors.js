/*export default function getNeighbors(x, y, arr) {
  console.log(`getNeighbors runninng with x: ${x} and y:${y}`)
  console.log(` xlength: ${arr.length} and ylength: ${arr[x].length}`)
  const neighborsArr = arr.reduce((finalArr, row, rowIndex)=> {
    return row.reduce((columnArr, cell, columnIndex)=>{
      if(columnIndex===y+1||columnIndex===y-1){columnArr.push(cell)}
    }, [])
  }, [])
    console.log(neighborsArr)
  const neighborsQty = neighborsArr.reduce((sum, neighbor) => {
    if (neighbor === undefined) {return sum}
	const newVal = neighbor > 0 ? (sum + 1) : sum;
	return newVal;
  }, 0);
  return neighborsQty;
}
*/

export default function getNeighbors(x, y, arr) {
  const neighborsQty = arr.reduce((totalSum, row, rowIndex)=> {
    if (rowIndex > x+1 || rowIndex < x-1){return totalSum}
    const rowTotal = row.reduce((rowSum, cell, columnIndex)=>{
      if(columnIndex > y+1 || columnIndex < y-1) {return rowSum}
      if(columnIndex ===y && rowIndex===x){return rowSum}
      if (cell>0) {return rowSum+1} else {return rowSum}
    },0)
    return rowTotal+totalSum;
  }, 0)
  return neighborsQty;
}