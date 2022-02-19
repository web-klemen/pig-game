`use strict`;

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // to je zdej drugo bato
// // rabm
// // mau
// // placa
// // sori

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// // we
// // will
// // be
// // coding
// // stuff

// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celsius`,
//     value: Number(prompt(`Degrees celsius:`)),
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// // zdej
// // bova
// // delala
// // coding
// // challange

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = ``;
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} °C in ${i + 1} days ...`;
//   }
//   console.log(`...` + str);
// };
// printForecast(data1);

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (esc) {
//   console.log(esc.key);

//   if (esc.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });




