function fibb(num) {
  let start = 1;
  let sum = 0;
  let prev = 0;

  for (let i = 1; i < num; i++) {
		sum = start + prev;
    prev = start;
    start = sum;
  }

  return start;
}

console.log(fibb(60));