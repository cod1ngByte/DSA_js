const waveForm = function (grid) {
    //here column size is same for each row
    for (let c = 0; c < grid[1].length; c++) {
        // column fixed
        let str = "";
        if (c % 2 == 0) {
            // even column -> traverse from top to bottom
            for (let r = 0; r < grid.length; r++) {
                //row is changing
                str += grid[r][c] + " ";
            }
        } else {
            // c % 2 != 0 ie odd column : traverse from bottom to top
            for (let r = grid.length - 1; r >= 0; r--) {
                str += grid[r][c] + " ";
            }
        }

        console.log(str);
    }
};

const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

waveForm(grid);

//waveform -> odd column -: up to down
// -> even column : down to up
