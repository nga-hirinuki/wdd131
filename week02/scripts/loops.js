const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop syntax

// for (initialization; condition; afterthought)
//  statement

for (let i = 0; i< studentReport.length; i++) {
    if (studentReport[i] > LIMIT) {
        console.log(studentReport[i]);
    }
}

// While loop syntax
// while (condition)
//     statement

let i = 0; // declare variable i

while (i < studentReport.length){ 
    if (studentReport[i]> LIMIT){
        console.log(studentReport[i]);
    }
}

//for each loop syntax

// array.forEach(function(element, index, array) {
//     // code to run on each element
//   });

studentReport.forEach(function(item){
    if (score > LIMIT){
        console.log(item);
        }
    })

// for ... in loop syntax
// for (variable in object) {
//     // code to run on each property
//   }

for(let items in studentReport){
    if (studentReport[items] > LIMIT)
        console.log(studentReport[items]);
    }  

  