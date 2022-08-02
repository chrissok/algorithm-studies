//given a string and a array of strings, return the number of ways its possible to construct the given string combining the string contained in the given array

const countConstruct = (string = "hello", stringPieces, memo = {}) => {
  if (string in memo) return memo[string];
  if (string === "") return 1;
  let count = 0;

  for (const stringPiece of stringPieces) {
    let slicedString = string;
    if (string.startsWith(stringPiece)) {
      slicedString = string.slice(stringPiece.length);
      count = count + countConstruct(slicedString, stringPieces, memo);
    }
  }
  memo[string] = count;
  return count;
};

console.log(
  countConstruct("christian", ["chris", "tian", "ti", "an", "bal", "sor"])
); // 2
console.log(countConstruct("maiz", ["m", "a", "iz", "oz", "mai"])); // 1
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eeeee",
    "eeeeeeeee",
    "eee",
    "ee",
    "eeeeee",
    "efefef",
    "ff",
  ])
); // 0
