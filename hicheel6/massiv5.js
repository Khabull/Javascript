let nas = prompt("nas buhii toonuud oruul");
let age = nas.split(" ");
oldson = age.indexOf("40");

if (oldson == -1) {
  console.log("Ийм утга байхгүй");
} else {
  console.log("Ийм утга байна " + oldson);
}
