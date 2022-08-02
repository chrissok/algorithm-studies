const binarySearch = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;
	
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);

    if (target === midIndex) {
      return midIndex;
    } else if (target < arr[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11));
