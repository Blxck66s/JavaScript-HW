a = document.querySelector("a");
a.addEventListener;
a.addEventListener("click", (event) => {
  if (confirm("Leave for https://google.com?")) {
    return true;
  } else {
    event.preventDefault();
  }
});
