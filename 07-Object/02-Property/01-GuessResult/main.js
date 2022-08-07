const user = {
  email: "cc@gmail.com",
  isActive: true,
};

user.isActive = false;
console.log(user); // * ได้เป็น object ของ user
user = {};
console.log(user); // ** ได้ object ว่างจึงขึ้น error
