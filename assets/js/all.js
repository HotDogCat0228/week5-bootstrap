"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
document.getElementById("myButton1").addEventListener("click", function () {
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "none";
});
document.getElementById("myButton2").addEventListener("click", function () {
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "block";
});
//# sourceMappingURL=all.js.map
