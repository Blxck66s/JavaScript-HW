let username;
let password;
function login(username, password) {
  if (username == "admin" && password == "P@ssw0rd") {
    return console.log("login success !~");
  } else {
    return console.log("login failed ~");
  }
}
