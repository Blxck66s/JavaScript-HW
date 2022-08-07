var name = "Joe";
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // * user.ref == this == window then this.name จึงดึง var name ข้างนอกมาเท่ากับ Joe
