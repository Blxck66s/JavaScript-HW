function getLongText() {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
}

console.log(getLongText()); // * ตามโจทย์ใน Readme จะไม่ได้อะไรเลยเพราะ return มี ; อยู่ข้างหลัง ข้อความ Lorem จึงไม่ได้ return ออกไป
// แต่ไม่รู้เพราะผิดพลาดเพราะ Prettier รึเปล่า ถ้าผิดพลาดก็ return เป็นข้อความ Lorem ใน console log ครับ
