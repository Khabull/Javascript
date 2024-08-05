// 1. Өгөгдсөн илэрхийллийн утгыг олдог "calculate" нэртэй функц бич. A=B*C-D ( B, C, D утгийг гараас авна)
// Илэрхийллийн бичиглэлийг өөрчлөхгүйгээр зөвхөн B,C,D-н утгыг өөрчлөхөд илэрхийллийн хариу үнэн байхаар хийнэ. Хариугаа console.log ашиглан шалгаарай.
let too = prompt("3 shirheg too oruulna uu");
toonuud = too.split(" ");
let a = toonuud[0];
let b = toonuud[1];
let c = toonuud[2];

const calculate = (B, C, D) => {
  let A = B * C - D;
  return A;
};

console.log("A= " + calculate(a, b, c));
// String()
// Number()
