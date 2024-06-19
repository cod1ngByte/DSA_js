//LC 349
//given two array and result must be unique element in any order

//nums1 = [2,9,1,2,2,3,9]
//nums2 = [2,1,1,7,6,8,3]

var intersection = function (nums1, nums2) {
    let freqNums1 = {};
    //creating the freq map of nums1 array element
    for (const val of nums1) {
        if (freqNums1[val]) {
            freqNums1[val]++;
        } else {
            freqNums1[val] = 1;
        }
    }

    let freqNums2 = {};
    //checking whether the element from nums2 is present in freq map of nums1 if yes then place it in freq map of nums2 also
    //and return the keys of freq map of nums2 that is the intersection of two arrays
    for (const val of nums2) {
        if (freqNums1[val]) {
            freqNums2[val] = 1;
        }
    }
    return Object.keys(freqNums2);
};
