

let num = [1,2,3,4,5,6,7,8];

let myfunc = function isEven(num){
  let result = (num % 2 === 0)
  return result;
}

//let evenNums = num.filter(myfunc);

let evenNums = num.filter(num => num % 2 === 0);

console.log(evenNums);
