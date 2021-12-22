//selection sort 
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            let temp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = temp;
        }
    }
    return arr;
}
const arr = [5, 8, 3, 10, 1, 6, 4, 7, 9, 2];
console.log(selectionSort(arr));