let NewPassword = prompt("Нууц үгээ оруулна уу");
let ConfirmPassword = prompt("Нууц үгээ давтаж оруулна уу");
if (NewPassword === ConfirmPassword) {
  console.log("Нууц үг амжилттай солигдлоо");
} else {
  console.log("Нууц үгээ зөв давтаж оруулаарай");
}
