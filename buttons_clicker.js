// NOTE: Should use a more accurate query selector in case class name
// change in the future
let submitBtn = document.querySelector(".btn-enhanced.btn-m");

submitBtn.click();

setTimeout(() => {
    let confirmBtn = document.querySelector(".confirm-button.btn-primary.btn-l");
    confirmBtn.click();
}, 500);
setTimeout(() => {
    let returnToExerciseBtn = document.querySelector(".btn");
    returnToExerciseBtn.click();
}, 1000);
