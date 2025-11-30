function newm() {
  let sub = document.querySelector(".mama");
  if (sub.innerText === "Subscribe") {
    sub.innerText = "Subcribed";
    sub.classList.add("yugandhar");
  } else {
    sub.innerText = "Subscribe";
    sub.classList.remove("yugandhar");
  }
}
function normal() {
  let one = Number(document.querySelector(".hello").value);
  if (one < 40) {
    one = one + 10;
  }
  // console.log(one)
  document.querySelector(".dad").innerHTML = `$${one}`;
  document.querySelector(".hello").value = "";
}