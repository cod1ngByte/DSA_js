//LC - 485

// [0,0,1,0,0] --> max consecutive ones = 1
// [0,0,0,0,0] --> max consecutive ones = 0

var findMaxConsecutiveOnes = function (arr) {
    let finalAns = 0;
    let consecutiveOnes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            consecutiveOnes++;
        } else {
            //update the finalAns before reset the count of consecutiveones
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0;
        }
    }
    // return finalAns;
    // edge case [1,1,0,1,1,1] according to above login finalAns = 2 but actual finalAns should be 3
    //finalAns is not getting update at the end
    return Math.max(finalAns, consecutiveOnes);
};
