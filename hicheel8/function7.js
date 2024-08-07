// Массив авч элементүүдийг тонгоргож бичдэг reverseArray нэртэй функц бич.
let too = prompt(" toonuud oruul");
let array = too.split(" ").map(Number);
console.log(array);
const reverseArray = (array) => {
  let reversedArray = array.reverse();
  return reversedArray;
};
console.log("Reversed Array: ", reverseArray(array));
