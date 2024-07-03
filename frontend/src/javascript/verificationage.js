const month = document.getElementById("month");
// const date = document.getElementById("date");
// const year = document.getElementById("year");

export function batas() {
  if (month.value.length > 2) {
    month.value = month.value.slice(0, 2);
  }
}

// month.addEventListener("input", function () {
//   if (this.value.length > 2) {
//     this.value = this.value.slice(0, 2);
//   }
// });

// date.addEventListener("input", function () {
//   if (this.value.length > 2) {
//     this.value = this.value.slice(0, 2);
//   }
// });

// year.addEventListener("input", function () {
//   if (this.value.length > 4) {
//     this.value = this.value.slice(0, 4);
//   }
// });
