user = prompt("username");
pass = prompt("password");

if (user == null || user.trim() == "") {
  alert("username is required");
} else if (pass == null || pass.trim() == "") {
  alert("password is required");
} else if (
  (user == "admin" && pass == "1234") ||
  (user == "john" && pass == "qwerty")
) {
  alert(`Hello ,${user}`);
} else {
  alert("invalid username or password");
}
