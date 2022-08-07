function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // *first name ป้อน alehandro favoritecolor ป้อน purple เข้าไป
console.log(getUserData({ firstName: "Melissa" })); // ** first nameป้อน melissa favoritecolor default เป็น green
console.log(getUserData({})); // *** เพราะ  firstname ไม่ได้กำหนด default
