let point = prompt("тоо оруул");

if (point <= 100 && point >= 90) {
  console.log(point + "= A");
} else if (point < 90 && point >= 80) {
  console.log(point + " = B");
} else if (point < 80 && point >= 70) {
  console.log(point + " = C");
} else if (point < 70 && point >= 60) {
  console.log(point + " = D ");
} else if (point < 60 && point >= 0) {
  console.log(point + " = F");
} else {
  console.log("0-ээс 100-ын хооронд тоо оруулна уу");
}
