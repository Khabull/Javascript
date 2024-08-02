// dog, cat, fox, wolf, elephant, lion, tiger,

let animals = prompt("dog, cat, fox, wolf, elephant, lion, tiger,");
let array = animals.split(", ");
// console.log(array);
array.splice(0, 2);
alert(array);
