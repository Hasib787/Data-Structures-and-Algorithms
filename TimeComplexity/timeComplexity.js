let count = 0;
let n = 10;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        count++;
    };
};
console.log(count);

let count1 = 0;
let b = 10;

for (let a = 0; a < b; a++) {
  for (let c = 0; c < b; c++) {
    for (let k = 0; k < b; k++) {
      count1 = count1 + 1;
    }
  }
}
console.log("Value of count is: " + count1);



