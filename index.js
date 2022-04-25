// let num1 = 200;
// let num2 = 200;
// let num3 = 200;


// if (num1 === num2  && num1 === num3){
//     console.log('equilateral all side equal')
// }else if(num1 !== num2 && num2 !== num3 && num1 !== num3){
//     console.log("scalene all side not equal")
// }else {
//     console.log('isosceles ')
// }

////////////////////////year
// let year = 2000;

// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log("leap year")
// }else{
//     console.log("not a leap year")
// }

///////////////////////////9
// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”
// let mark = 20;

// if(mark >= 90 && mark <= 100){
//     console.log("S")
// }else if(mark >= 80 && mark <= 90){
//     console.log("A")
// }else if(mark >= 70 && mark <= 80){
//     console.log("B")
// }else if(mark >= 60 && mark <= 70){
//     console.log("C")
// }else if(mark >= 50 && mark <= 60){
//     console.log("D")
// }else if(mark >= 40 && mark <= 50){
//     console.log("E")
// }else if(mark >= 0 && mark <= 40){
//     console.log("student has faliled")
// }else{
//     console.log("invalid marks")
// }

// // If month is outside the range of 1 and 12 print “Invalid month”.
// // If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// // Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// // Else print “31 days”.

// let month = 20;

// if(month < 1 && month > 12){
//     console.log("invalid month")
// }else if(month === 4 || month === 6 || month === 9  || month === 11){
//     console.log("30 Days")
// }else{
//     console.log("31 days")
// }

// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”

// let num1 = 200;
// let num2 = 200;

// if(num1 + num2){
//     console.log("add")
// }else if(num1 - num2){
//     console.log("subtract")
// }else if(num1 * num2){
//     console.log("multiply")
// }else if(num1 / num2){
//     console.log("divided")
// }else if(num1 % num2){
//     console.log("modulus")
// }else{
//     console.log("invalid opreator")
// }


// 7 and 6 not understood

// const start = 20;
// const end = 99;
// const numToFind = 10;

// const r1 = 'Number with in given range';
// const r2 = 'Number not in given range';

// if(numToFind >= start && numToFind <= end) {
//     console.log(r1)
// }else{
//     console.log(r2)
// }



// const operation = 'subtract';
// const operation = 'multiply';
// const operation = 'divide';
// const operation = 'modulus';
// const operation = 'other';

// if (operation === 'add'){
//     console.log('Addition Operation:', num1+num2)
// }else if(operation === 'subtract'){
//     console.log('Subtraction Operation:', num1-num2)
// } else if (operation === 'multiply'){
//     console.log('Multiply Operation:', num1*num2)
// } else if (operation === 'divide'){
//     console.log('Division Operation:', num1/num2)
// }else if (operation === 'modulus'){
//     console.log('Modulus Operation:', num1%num2)
// }else {
//     console.log('Invalid Operations')
// }

// switch (operation){
//     case 'subtract':
//         console.log('Subtraction Operation:', num1-num2);
//         break;
//     case 'add':
//         console.log('Addition Operation:', num1+num2 );
//         break;
//     case 'multiply':
//         console.log('Multiply Operation:', num1*num2);
//         break;
//     case 'divide':
//         console.log('Division Operation:', num1/num2);
//         break;
//     case 'modulus':
//         console.log('Modulus Operation:', num1%num2);
//         break;
//     default:
//         console.log('Invalid Operations');
// } 

// Write a JavaScript program that accept two integers and display the larger.

//  Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. G to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -

// const num1 = 3;
// const num2 = -1;
// const num3 = 7;

// if(num1 < 0){
//     console.log("num1","-")
// }else if(num2 < 0){
//     console.log("num2","-")
// }else if(num3 < 0){
//     console.log("num3","-")
// }else{
//     console.log("none")
// }

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1


// const arr = [8, 10, 4]

// console.log(arr)

// let result = [];

// if(arr[0] > arr[1] && arr[0] > arr[2]){
//     result.push(arr[0])
//     if(arr[1] > arr[2]){
//         result.push(arr[1])
//         result.push(arr[2])
//     }else {
//         result.push(arr[2])
//         result.push(arr[1])
//     }
// } else if(arr[1] > arr[0] && arr[1] > arr[2]){
//     result.push(arr[1])
//     if(arr[0] > arr[2]){
//         result.push(arr[0])
//         result.push(arr[2])
//     }else {
//         result.push(arr[2])
//         result.push(arr[0])
//     }
// } else {
//     result.push(arr[2])
//     if(arr[0] > arr[1]){
//         result.push(arr[0])
//         result.push(arr[1])
//     }else {
//         result.push(arr[1])
//         result.push(arr[0])
//     }
// }


// console.log(result)


// const arr = [-5, -2, -6, 0, -1, 25, -50, 14];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] < max){
//         max = arr[i]
//     }
// }

// console.log(max)




// . Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i =0; i < 15; i++){
//     if(i%2 === 0){
//         console.log(i,"is even")
//     }else {
//         console.log(i,"is odd")
//     }
// }




// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

// for(let i = 1; i < 100; i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
// }




// . According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor
// Click me to see the solution



// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

// for (let i = 2; i <= 5; i++){
//   let sum = 5;
//   while (sum > 1) {
//     sum = Math.sqrt(i)
//     console.log(sum)
//   }
//}


// Write a JavaScript program to construct the following pattern, using a nested for loop

/*
         *
       * *
     * * *
   * * * *
 * * * * *   
 */

// for(let i = 1; i <= 20; i++){
//     console.log(" *".repeat(i) + "  ".repeat(40-i*2) + "* ".repeat(i))
// }


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000

// for(let i = 0; i <  100; i++){
//     if(i % 3 === 0){
//         console.log("sum  of 3")
//     }else if(i % 5 === 0){
//         console.log("sum  of 5")
//     }
// }



/*
 Data Type String Array Integers Numbers Float Decimal 
1. Undefined --- is a type in which the value has not been assigned yet. An empty location in memory with variable name attached to this memory location
2. Null ---- means no or Nil or Zero value
3. Number ---- 1234567890_1234567890_1234567890_1234567890_1234567890_123456
4. BigInt ---- numbers more then 52 digits are stored in BigInt. It is mostly used for science projects.
5. String
6. Object
6a. Array
6b Functions
6c Date
6d RegExp
7 Bollens --- true or false 0 or 1 value in binary
8 Errors as a special data type for JS

 */

// const myName = ['Hamdan', 'Ahmed', 45, 'He lives in Istanbul', {Country:'Pakistan'} ]
// const age = 45
// const fName = 'Nabeeha'
// const isKid = true

// console.log(typeof myName)
// console.log(typeof age)
// console.log(typeof fName)
// console.log(typeof isKid)



// if(Array.isArray(myName))
// {
//   console.log('this is array')
// } 
// else 
// {
//   console.log('Not an array')
// }


// let a = [1,2,3];
// // let b = a.slice(); // by using slice we can break the reference, now this variable points to some other reference
// // let b = [ ...a ]
// // let b = new Array(...a)
// console.log(a, b);

// a[0] = 7
// a[1] = 8
// a[2] = 9

// console.log(a, b);

// b[0] = 6
// console.log(a, b);


// let myColor = ["Red", "Green", "White", "Black"];
// "Red + Green + White + Blact"
// let result = myColor.toString(); // this will convert the array to an string

// let result = myColor.join(' + ') // this will join the array elements and put same string written inside of join 

// console.log(typeof result, result)



// let arr1 = [ 'abc', 'cde', 'z', 'az', 'h', 'a' ];
// let result = arr1.sort(); // this sort() method sort the array elements as a string values even if we pass numbers in array values then it also be considered as sting values

// console.log(result)


// let x = false;
// if (true){
//   console.log('false block')
// }


// let age1 = 19
// let age2 = '19'

// if(age1 == age2){
//   console.log('true')
// }else{
//   console.log('false')
// }

const arr = [2,4,6,8,10, 12]

// let res = []

// for (i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// Using for in loop
// let res = []
// console.log(arr)
// for (el in arr){
//   res.push(arr[el]*3)
// }
// console.log(res)

// Using for of loop
// let res = []
// console.log(arr)
// for (el of arr){
//   res.push(el*3)
// }
// console.log(res)


// Using map method
// const res = arr.map (el => el*3)

// Using forEach method
let res = []

arr.forEach( (el,i) => arr[i]=el*3 )
console.log(arr)