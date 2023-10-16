const decrease = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("increase")[0];
let span = document.getElementById("value");
let count = 0;
function defineColor() {
  if (count > 0) {
    return (span.style.color = "green");
  } else if (count === 0) {
    return (span.style.color = "black");
  } else {
    return (span.style.color = "red");
  }
}
decrease.addEventListener("click", function () {
  count--;
  span.textContent = count;
  defineColor();
});
reset.addEventListener("click", function () {
  span.textContent = 0;
  span.style.color = "black";
});
increase.addEventListener("click", function () {
  count++;
  span.textContent = count;
  defineColor();
});
