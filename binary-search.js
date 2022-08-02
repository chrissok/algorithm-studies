const binarySearch = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midIndex = ~~((left + right) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    } else if (target < arr[midIndex]) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  const newSegment = arr.slice(left, right);

  return binarySearch(newSegment, target);
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11));
