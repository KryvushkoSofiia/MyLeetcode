var checkSubarraySum = function (nums, k) {
    let subSum = 0;
    let set = new Set();
    if (nums.length <= 1) {
        return false;
    }
    
    let prevRemainder = 0;

    for (let num of nums) {
        subSum = subSum + num;
       
        let remainder = subSum % k;
        if (set.has(remainder)) {
            return true;
        }
        
        set.add(prevRemainder);
        prevRemainder = remainder;
        
    }

    return false;
};
