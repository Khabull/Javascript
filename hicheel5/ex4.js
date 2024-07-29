let n = prompt("тоо оруулна уу");
function isPrime(num) {
  if (num <= 1) return false; // 1 бол угаасаа анхны тоо биш
  if (num === 2) return true; // 2 бол анхны тоо
  if (num % 2 === 0) return false; // 2-т хуваагддаг бүх тоо анхны тоо биш

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false; //тухайн тоо нь сондгой тоонд хуваагддаг бол анхны тоо биш
  }
  return true;
}
for (let i = 2; i <= n; i++) {
  console.log(i);
}

// for (i = 2; i <= n; i++) {
//     if (n % 1 !== 0 && n % n === 0) {
//       console.log();
//     }
//   }
