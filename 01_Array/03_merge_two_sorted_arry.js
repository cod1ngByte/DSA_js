//LC - 88

var merge = function (nums1, m, nums2, n) {
    let i = 0; // iterate on nums1 array
    let j = 0; // iterate on nums2 array

    // let result =  []; //empty array of length zero;
    // let result = Array(m+n) ; // empty array of length m+n;
    let results = Array(m + n).fill(0); // array fill with zero of length m+n
    let k = 0; // iterate on result array

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            results[k] = nums1[i];
            i++;
            k++;
        } else {
            results[k] = nums2[j];
            j++;
            k++;
        }
    }
    //the above while loop will end if any one array nums1 or nums2 element will exhaust

    while (i < m) {
        results[k] = nums1[i];
        i++;
        k++;
    }

    while (j < n) {
        results[k] = nums2[j];
        j++;
        k++;
    }

    // nums1 = results; //assigning the results array to nums1 array

    //copy the results array element to nums1 array
    for (let i = 0; i < results.length; i++) {
        nums1[i] = results[i];
    }
    return nums1;
};
