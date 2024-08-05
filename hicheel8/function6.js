let too = prompt("toonuud oruul");
let largeNumber;
let array = too.split(" ").map(Number); // Массивыг тоон утга болгон хөрвүүлж байна

const findLargestElement = (array) => {
  largeNumber = array[0]; // Эхлээд хамгийн анхны элементийг томоор зарлах
  for (let i = 1; i < array.length; i++) {
    // Анхны элементийг шалгаж эхлэх
    if (array[i] > largeNumber) {
      largeNumber = array[i];
    }
  }
  return largeNumber;
};

console.log("hamgiin ih element: " + findLargestElement(array));
