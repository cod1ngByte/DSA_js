const printRowWise = function (grid) {
    for (let r = 0; r < grid.length; r++) {
        // row fixed
        //grid row
        let str = "";
        for (let c = 0; c < grid[r].length; c++) {
            //column is changing
            //grid column ie. for each row we have 1d array
            str += grid[r][c] + " ";
        }
        console.log(str);
    }
};

const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16, 18, 19, 20],
];

printRowWise(grid);
