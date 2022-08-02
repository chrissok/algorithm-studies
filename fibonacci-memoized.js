const fibb = (num, memo = {}) => {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;

  memo[num] = fibb(num - 1, memo) + fibb(num - 2, memo);

  return memo[num];
};

console.log(fibb(50));
