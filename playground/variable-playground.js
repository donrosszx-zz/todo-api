// var person = {
//     name: 'Don',
//     age: 21
// };

// function updatePerson (obj) {
//     // doing this makes a copy of person into obj
//     // but doesn't update person
//     // obj = {
//     //     name: 'Don',
//     //     age: 44
//     // };

//     // if you want the original object passed in to change,
//     // you have to mutate it, aka updating one its props
//     obj.age = 44;
// }

// updatePerson(person);
// console.log(person);

// Array example

var grades = [15, 37];

function addGrade (gradeArray) {
    // gradeArray = [15, 37, 99];

    gradeArray.push(99);

}

addGrade(grades);
console.log(grades);
