//Array exercises
//Function to check whether an input is in an array or not

// let userName;
// let userNumber;
// let storeUserName;
// let storeUserNumber;
// let ansNum;

// let arr = [1, 2, 3, 4, 5, "glen"];
// function checkArray(userName, userNumber){
//     storeUserName = prompt('Enter user name');
//     userName = storeUserName;
//     storeUserNumber = prompt('Enter user number');
//     userNumber = parseInt(storeUserNumber);

//     console.log(arr.includes(userName));
//     console.log(arr.includes(userNumber));
    
// }
// checkArray(userName, userNumber)

//Javascript function to clone an array

// const originalArray = [1, 2, 3, 4, 5, "glen"];

// function cloningArray(){
//     const cloneArray = [...originalArray]; 
//     console.log(cloneArray);
// }
// cloningArray();

//Function to get first element of array
// let arr = [1, 2, 3, 4, 5, 6, "glen"];
//  const first = function getFirstElement(){
//     if(arr == null){
//         return void 0;
//     }
//     if()
// }

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// let i;
// let j;
//for(i=0; i < arr.length; i++){
    //console.log(`row ${i}` )
    //for(j=0; j < arr.length; j++){
        //console.log(`row ${arr[i]}`)
       // console.log(arr[i]);
   // }
//}

//Finding sum of squares of a numeric vector
// let arr = [0, 1, 2, 3, 4, 5];
// let sum = 0;
// for(i = 0; i < arr.length; i++){
//     sum += Math.pow(arr[i], 2);
// }
// console.log(sum)

//Computing sum and product of any array of integers
// let arr = [0, 1, 2, 3, 4, 5];
// let i;
// sum = 0;
// product = 0;
// for(i = 0; i < arr.length; i++){
//     sum += arr[i];
//     product *= arr[i];
// }
// console.log(`Sum of Array is ${sum}`);
// console.log(`Product of Array is ${product}`);

//Adding elements into an array and displaying it




//DOM EXERCISE
let styleBtn = document.getElementById("button");
const paragraphText = document.querySelector('#text');
paragraphText.style.color = "blue";

function js_style(){
    paragraphText.style.color = "red"
    paragraphText.style.fontSize = '30px'
    paragraphText.style.fontFamily = "impact,Charcoal"
    paragraphText.style.backgroundColor = "grey"
}

styleBtn.addEventListener("click", js_style);

//getting user's fisrt and last name
// let submitBtn = document.getElementById("submit");
// function getUserNames(){
//     let firstName = document.querySelector('#Fname');
//     let lastName = document.querySelector('#Lname');
// }

// submitBtn.addEventListener("click", getUserNames);