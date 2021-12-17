//Linear search
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  const notFound = "Not Found";
  return notFound;
};
const result = linearSearch([1, 2, 3, 4, 5], 10);
console.log(result);
