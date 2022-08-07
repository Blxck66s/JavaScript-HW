input = prompt("username ?");
let user;

if (input == "" || input == undefined) {
  user = "guest";
  alert(`welcome ,${user}`);
} else if (input == "codecamp") {
  let password = +prompt("Password ?");
  if (password == "123456") {
    user = "codecamp";
    alert(`welcome ,${user}`);
  } else {
    alert("Wrong password !~");
  }
} else {
  user = "guest";
  alert(`welcome ,${user}`);
}
