const mergeSort = (arr = []) => {
  if (arr.length <= 1) {
		console.log(arr);
    return arr;
  }

  let half = arr.length / 2;
  let roundedHalf = ~~half;

  const leftSideArr = mergeSort(arr.slice(0, roundedHalf));
  const rightSideArr = mergeSort(arr.slice(roundedHalf, arr.length));

  const sortedValues = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSideArr.length && rightIndex < rightSideArr.length) {
    if (leftSideArr[leftIndex] < rightSideArr[rightIndex]) {
      sortedValues.push(leftSideArr[leftIndex]);
      leftIndex++;
    } else {
      sortedValues.push(rightSideArr[rightIndex]);
      rightIndex++;
    }
  }

  sortedValues.push(...leftSideArr.slice(leftIndex));
  sortedValues.push(...rightSideArr.slice(rightIndex));

	console.log(sortedValues);

  return sortedValues;
};

const arr = [5, 3, 7, 5, 6, 8, 7, 9, 8, 6, 4, 2];

mergeSort(arr);
