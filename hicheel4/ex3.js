let n = prompt("тоо оруулна уу");
let total = 0;
for (i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
console.log(total);