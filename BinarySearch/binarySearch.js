// Binary search
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
const targetValue = binarySearch(
  [1, 4, 7, 10, 15, 17, 20, 21, 25, 28, 32, 36, 38, 40, 45, 48, 50, 52, 57],
  25
);
console.log("The searching value is =", targetValue);

var friendsName = [
  "Alif",
  "Arif",
  "Bani",
  "Bond",
  "Cobi",
  "Hasib",
  "Don",
  "Dean",
  "Ema",
  "Eriq",
  "Iqbal",
  "Jubayer",
];

const binarySearch1 = (findName) =>{
    let leftSide = 0;
    let rightSide = friendsName.length - 1;

    while (leftSide <= rightSide){
      let midPosition = Math.floor ((leftSide + rightSide) / 2);
      if (friendsName[midPosition] === findName) {
        return midPosition;
      }
      if (friendsName[midPosition] < findName) {
        leftSide = midPosition + 1;
      }else{
        rightSide = midPosition - 1;
      }
    }
    return -1;
  } 

  const findValue = binarySearch1("Hasib");
  // console.log(findValue);
