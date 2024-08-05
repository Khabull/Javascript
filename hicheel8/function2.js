// 2. Гараас хоног, цаг өгсөн бол нийт цаг болохыг олдог "totalTime" нэртэй функц бичээрэй.
// day буюу хоног, time буюу цаг өгсөн 2 хувьсагч байх ба нийт хэдэн цаг байгааг тооцон totalTime хувьсагчид хадгалан console.log ашиглан харуулаарай.
let a = Number(prompt(" toon utgaar udur oruul "));
let b = Number(prompt(" toon utgaar tsag oruul "));

const totalTime = (a, b) => {
  let c = a * 24 + b;
  return c;
};

console.log("Нийт цаг: ", totalTime(a, b));
