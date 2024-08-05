// Тэгш өнцөгтийн урт өргөнийг авч талбайг нь олдог calculateArea нэртэй функц бич.
let a = Number(prompt("Urt"));
let b = Number(prompt("urgun"));
const calculateArea = (a, b) => {
  return a * b;
};

console.log("Тэгш өнцөгтийн талбай нь: ", calculateArea(a, b));
