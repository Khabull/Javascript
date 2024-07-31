let n = Number(prompt("too oruul"));
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let a = 2; a < i; a++) {
    if (i % a == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime == true) {
    console.log(i);
  }
}
