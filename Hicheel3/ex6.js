// let speed = prompt("тоо оруул");
// if (speed >= 80 && speed < 85) {
//   console.log("1 оноо хасагдсан, эрх хасагдаагүй");
// } else if (speed >= 85 && speed < 90) {
//   console.log("2 оноо хасагдсан, эрх хасагдаагүй");
// } else if (speed >= 90 && speed < 95) {
//   console.log("3 оноо хасагдсан, эрх хасагдаагүй");
// } else if (speed >= 95 && speed < 100) {
//   console.log("4 оноо хасагдсан, эрх хасагдаагүй");
// } else if (speed >= 100 && speed < 105) {
//   console.log("5 оноо хасагдсан, эрх хасагдсан");
// }
let speed = prompt("тоо оруул");

if (speed < 80) {
  console.log("хурд хэтрээгүй ");
} else {
  let onoo = parseInt((speed - 80) / 5);
  if (onoo >= 5) {
    console.log(onoo + " оноо хасагдсан, эрх хасагдсан");
  } else if (onoo < 5) {
    console.log(onoo + " оноо хасагдсан, эрх хасагдаагүй");
  }
}
