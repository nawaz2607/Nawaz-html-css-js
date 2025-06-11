let marks = [85, 62, 90, 78, 88, 95, 70, 60, 100, 82]

console.log('original marks',marks);

let total= marks.length;
console.log('total',total);
console.log('Maximum Marks:',Math.max(...marks));
console.log('Minimum Marks,',Math.min(...marks));
let sum = marks.reduce((acc, val) => acc + val, 0);
let average = sum / marks.length;
const roundedAverage = parseFloat(average.toFixed(2));

console.log("average Marks:", average);
console.log("rounded average Marks:", roundedAverage);
marks.sort((a, b) => a - b);
console.log("ascending:",marks)
marks.sort((a,b) => a-b);
console.log("descending:",marks)
marks.push(76)
marks.unshift(76)
console.log(marks);
marks.pop()
marks.shift()
console.log(marks)
console.log(marks.includes(90));