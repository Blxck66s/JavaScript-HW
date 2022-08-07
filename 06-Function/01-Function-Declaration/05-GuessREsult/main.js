// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // * เพราะ from = sender และ sarah = to

// sendTo(null); // **เพราะ null แปลงเป็ฯ string ส่วน to ไม่ได้กำหนดค่าให้จึงเป็น undefined

const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** to กำหนดเป็น max ส่้วน from ไม่ได้กำหนดจึงเป็น default
sendTo("Ben", "Jay"); // **** to กำหนดเป็น ben from กำหนดเป็น jay
