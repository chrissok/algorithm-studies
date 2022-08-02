//given a set of nums and a number, return an array with a way of getting the given number summing the given set of numbers in anyway u can

const sum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;

    const result = sum(remainder, numbers, memo);

    if (result !== null) {
      memo[target] = [...result, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

console.log(sum(5, [4, 2, 3])); // 2,3
console.log(sum(5, [4, 3])); // null
console.log(sum(300, [7, 14])); // null
