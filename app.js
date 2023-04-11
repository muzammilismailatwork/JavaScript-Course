// Question no 1

// function myFunction(firstNum) {
//   return function (secondNum) {
//     console.log(firstNum + secondNum);
//   };
// }
// let innerFunction = myFunction(7);
// innerFunction(5);

// Question no 1 end

// Question no 2

// function myValue(arr, value) {
//   if (arr.length === 0) {
//     return false;
//   }
//   if (arr[0] === value) {
//     return true;
//   }
//   return myValue(arr.slice(1), value);
// }

// let myData = [56, 21, 90, 86, 60];
// console.log(myValue(myData, 90));
// console.log(myValue(myData, 20));

// Question no 2 end

// Question no 3

// function addPara(paragraph) {
//   const newPara = document.getElementById("my-para");
//   const myData = document.createTextNode(paragraph);
//   newPara.appendChild(myData);
//   document.body.appendChild(newPara);
// }
// addPara("New para added bottom of the HTML document.");

// Question no 3 end

// Question no 4
// function addInList(item) {
//   let ul = document.getElementById("list");
//   let li = document.querySelector("li");
//   li.appendChild(document.createTextNode(item));

//   ul.appendChild(li);
// }
// addInList(" Shoes");

// Question no 4 end

// Question no 5

// function bgColor(element, color) {
//   element.style.backgroundColor = color;
// }

// const myMessage = document.getElementById("message");
// bgColor(myMessage, "green");

// Question no 5 end

// Question no 6

// function saveObjectToLocalStorage(key, object) {
//   const obj = JSON.stringify(object);
//   localStorage.setItem(key, obj);
// }

// const myCar = {
//   name: "BMW",
//   color: "Black",
//   model: "2023",
// };
// saveObjectToLocalStorage("myKey", myCar);

// Question no 6 end

// Question no 7

// function saveObjectToLocalStorage(key, object) {
//   const obj = JSON.stringify(object);

//   localStorage.setItem(key, obj);
// }

// const myCar = {
//   name: "Mercedes",
//   color: "silver",
//   model: "2022",
// };
// saveObjectToLocalStorage("myKey", myCar);

// function getObjectFromLocalStorage(key) {
//   const objJSON = localStorage.getItem(key);
//   if (!objJSON) {
//     return null;
//   }

//   return JSON.parse(objJSON);
// }

// Question no 7 end

// Question no 8

// function saveObjectToLocalStorage(obj) {
//   Object.keys(obj).forEach((key) => {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
//   });

//   const newObj = {};
//   Object.keys(obj).forEach((key) => {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   });
//   return newObj;
// }

// const myCar = { name: "Audi", color: "black", model: "A6" };
// const savedObj = saveObjectToLocalStorage(myCar);
// console.log(savedObj);

// Question no 8 end
