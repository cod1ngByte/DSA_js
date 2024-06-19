// LC - 169

/* //using freqMap = {}
const majorityElement = function (arr) {
    const freqMap = {};
    for (const val of arr) {
        if (freqMap[val]) {
            freqMap[val]++;
        } else {
            freqMap[val] = 1;
        }
    }
    console.log(freqMap);
    //findind max from freqMap 
    let maxValue = -1;
    let keyValue = null;

    for (const [key, val] of Object.entries(freqMap)) {
        if (val > maxValue) {
            maxValue = val;
            keyValue = key;
        }
    }
    console.log(keyValue, maxValue);
};
*/

var majorityElement = function (arr) {
    let count = 0;
    let currPossibleMajority = -1;

    for (const val of arr) {
        if (currPossibleMajority == val) {
            count++;
        } else {
            if (count == 0) {
                //reset the current possible majority
                currPossibleMajority = val;
            } else {
                count--;
            }
        }
    }
    return currPossibleMajority;
};

const arr = [15, 15, 3, 15, 3, 1, 3, 15, 3, 3, 15, 15, 15, 15, 15, 15, 15];
console.log(majorityElement(arr));
