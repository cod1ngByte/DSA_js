// transpose of matrix is possible for only square matrix;
//LC 867
const transposeMatrix = function (grid) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = r; c < grid.length; c++) {
            let temp = grid[r][c];
            grid[r][c] = grid[c][r];
            grid[c][r] = temp;
        }
    }
};

const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

console.log("before transpose: ", grid);
transposeMatrix(grid);
console.log("after transpose: ", grid);
