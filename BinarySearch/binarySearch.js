// Binary search
const binarySearch = (arr, target) =>{
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let mid = math.floor((left + right) / 2);
            if (arr[mid] == target) {
                return mid;
            }
            if (arr[mid] < target) {
                left = mid + 1;
            }else{
                right = mid - 1;
            }
    }
    return -1;
}
const result = binarySearch([1,4,7,10,15,17,20,21,25,28,32,36,38,40,45,48,50,52,57], 10);
console.log(result);