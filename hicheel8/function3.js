// Гараас өгсөн 2 тооны ихийг олж буцаадаг "max" нэртэй функц бич
let a = Number(prompt("too oruul"));
let b = Number(prompt("too oruul"));

const max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log("max: " + max(a, b));
