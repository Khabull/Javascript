// Өгсөн онооны үсгэн үнэлгээг олдог "checkPoint" нэртэй функц бич
let degree = Number(prompt("too oruul"));

const checkPoint = (degree) => {
  if (degree <= 100 && degree > 89) {
    return console.log("A");
  } else if (degree < 90 && degree > 79) {
    return console.log("B");
  } else if (degree < 80 && degree > 69) {
    return console.log("C");
  } else if (degree < 70 && degree > 59) {
    return console.log("D");
  } else if (degree < 60) {
    return console.log("F");
  }
};

checkPoint(degree);
