const Node = function() {
    return(<div
        className="node"
      ></div>)
}
const gridGenerator = function(){
    
    let GRID_ROW_LENGTH = 30;
    let GRID_COL_LENGTH = 30;
    const grid = [];
    for (let row = 0; row < GRID_ROW_LENGTH; row++) {
        const currentRow = [];
        for (let col = 0; col < GRID_COL_LENGTH; col++) {
            currentRow.push("newNode");
        }
        grid.push(currentRow);
    }
    return grid
}


export default function Grid() {
    const grid = gridGenerator();
  return (
        <div className="grid">
        {grid.map((row, rowId) => {
            return (
            <div class="grid-row" key={rowId}>
                {row.map((node, nodeId) => {
                return (
                    <Node></Node>
                );
                })}
            </div>
            )})}
            </div>
  );
}
