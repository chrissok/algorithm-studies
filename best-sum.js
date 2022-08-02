//given a set of nums and a number, return the shortest array with the way of getting the given number summing the given set of numbers in anyway u can

const sum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (let num of numbers) {
    const remainder = target - num;

    const result = sum(remainder, numbers, memo);

    if (result !== null) {
      const combination = [...result, num];
			
      if (shortest === null || combination.length < shortest.length) {
        shortest = [...combination];
      }
    }
  }

  memo[target] = shortest;
  return shortest;
};

console.log(sum(5, [4, 2, 3])); // 2,3
console.log(sum(5, [4, 3, 5])); // 5
console.log(sum(100, [1, 2, 5, 25])); // 25,25,25,25
