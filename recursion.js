const array = [1, 2, 3, 4, 5, 6];

function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  const lastNumber = array.pop();
  console.log(array);
  return lastNumber + sum(array);
}

console.log(sum(array));
