button = document.getElementsByTagName("button");
text = document.getElementsByTagName("h1");
button[0].addEventListener("click", function (event) {
  text[0].style.display = "none";
});
