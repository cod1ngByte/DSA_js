//subarray is continous cross-section of your array
// [1,2,3,4]
/*
        1
        1,2
        1,2,3
        1,2,3,4
        2,
        2,3  ----> // 1,3 is not a subarray becoz of it is not continous order
        2,3,4
        3,
        3,4
        4
*/
// every possible subarray is having two index start and end

const subarray = function (arr) {
    for (let start = 0; start < arr.length; start++) {
        let str = "";
        for (let end = start; end < arr.length; end++) {
            str = str + arr[end] + " ";
            console.log(str);
        }
    }
};

const arr = [1, 2, 3, 4];
subarray(arr);
