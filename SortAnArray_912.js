var sortArray = function (nums) {
    if (nums.length < 2) return nums;
    return sortArrayHelper(nums, 0, nums.length - 1);
};

function sortArrayHelper(arr, left, right) {

    const index = partition(arr, left, right);

    if (left < index - 1) {
        sortArrayHelper(arr, left, index - 1);
    }

    if (index < right) {
        sortArrayHelper(arr, index, right);
    }

    return arr;
}

function partition(arr, left, right) {

    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    return arr;
}
