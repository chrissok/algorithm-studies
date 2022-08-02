//given a string and a array of strings, return true if its possible to construct the given string combining the string contained in the given array

const canConstruct = (string = "hello", stringPieces, memo = {}) => {
  if (string === "") return true;

  if (string in memo) return memo[string];

  for (const stringPiece of stringPieces) {
    let slicedString = string;
    if (string.startsWith(stringPiece)) {
      slicedString = string.slice(stringPiece.length);
      if (canConstruct(slicedString, stringPieces, memo) === true) {
        memo[string] = true;
        return true;
      }
    }
  }

  memo[string] = false;
  return false;
};

console.log(canConstruct("holahola", ["ho", "holah", "aho", "ol", "a"])); // true
console.log(canConstruct("holahola", ["ho", "ho2lah", "a3ho", "ol2", "a3"])); // false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eeeee",
    "eeeeeeeee",
    "eee",
    "ee",
    "eeeeee",
  ])
); // false
