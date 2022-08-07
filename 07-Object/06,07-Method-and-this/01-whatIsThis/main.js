let user = {
  name: "John",
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi(); // *John เพราะ this ใช้ user เพราะอยู่หลัง .name
