import React, { useState, useEffect } from 'react';

const GRID_ROW_LENGTH = 30;
const GRID_COL_LENGTH = 70;
const Node = function({active}) {
    let classNameResult = `node ${active}`
    return(<div
        className={classNameResult}
      ></div>)
}

function newArray(){
    const grid = [];
    for (let row = 0; row < GRID_ROW_LENGTH; row++) {
        const currentRow = [];
        for (let col = 0; col < GRID_COL_LENGTH; col++) {
            currentRow.push(0);
        }
        grid.push(currentRow);
    }
    return grid
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const gridGenerator = function(){
    const grid = [];
    for (let row = 0; row < GRID_ROW_LENGTH; row++) {
        const currentRow = [];
        for (let col = 0; col < GRID_COL_LENGTH; col++) {
            let randomNumbe = getRandomInt(10);
            let result = randomNumbe < 7 ? 0 : 1;
            currentRow.push(result);
        }
        grid.push(currentRow);
    }
    return grid
}

function evolution(grid) {
    // let temp = grid;
    let newgraid = newArray();

    for (let row = 0; row < GRID_ROW_LENGTH; row++) {
        // const currentRow = [];
        for (let col = 0; col < GRID_COL_LENGTH; col++) {
            let lives = 0;
            for (let vrow = row-1; vrow <= row+1; vrow++) {
                for (let vcol = col-1; vcol <= col+1; vcol++) {
                    if(grid[(vrow + GRID_ROW_LENGTH) % GRID_ROW_LENGTH][(vcol + GRID_COL_LENGTH) % GRID_COL_LENGTH]) {
                        lives+=1;
                    }
                }
            }
            if(grid[row][col]){
                lives-=1;
            }

            newgraid[row][col] = (lives == 3) || ((lives == 2) && (grid[row][col]));
            // if(lives == 3){
            //     newgraid[row][col] = 1;
            // }
            // else if ((lives == 2) && (temp[row][col])){
            //     newgraid[row][col] = 1;
            // }
            // else{
            //     newgraid[row][col] = 0;
            // }
            // let randomNumbe = getRandomInt(10);
            // let result = randomNumbe < 9 ? 0 : 1;
            // currentRow.push(result);
        }
        // grid.push(currentRow);
    }
    return newgraid;

  }

export default function Grid() {

    useEffect(()=>{
        let myInterval = setInterval(() => {
                setGrid(evolution(grid));
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
    });


    const [grid, setGrid] = useState(gridGenerator());
    // let grid = gridGenerator();
    // setTimeout(function(){ 
    //     // console.log(grid)
    //     // grid = evolution(grid);
    //     setGrid(evolution(grid))
    //  }, 3000);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       console.log('This will run every second!');
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);

    //  useEffect(() => {
    //     const timer = setInterval(() => {
    //         setGrid(evolution(grid));
    //     //   console.log('This will run after 1 second!')
    //     }, 1000);
    //     return () => clearInterval(timer);
    //   }, []);
  return (
        <div className="grid">
        {grid.map((row, rowId) => {
            return (
            <div className="grid-row" key={rowId}>
                {row.map((node, nodeId) => {
                    // console.log(node)
                    let className = (node == 1) ? "active": ""; 
                return (
                    <Node key={nodeId} active={className}></Node>
                );
                })}
            </div>
            )})}
            </div>
  );
}


