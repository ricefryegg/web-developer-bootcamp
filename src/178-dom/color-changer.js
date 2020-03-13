// alert("connetcted!")

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // alert("clicked!");
  // document.body.style.background = document.body.style.background === "purple" ? "White" : "purple"

  // better way
  document.body.classList.toggle("purple");
})