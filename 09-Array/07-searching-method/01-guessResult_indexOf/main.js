const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison")); // * 1 เจอ bison ที่ตำแหน่ง2 ถ้าตามคนเข้าใจ แต่ลำดับของคอมเริ่ม 0 จึงเป็น 0 , 1
console.log(beasts.indexOf("bison", 2)); // ** 4 เพราะหาตั้งแต่ตำแหน่ง 2 เป็นต้นคือ camel จึงเจอ bison ที่ตำแหน่ง 4
console.log(beasts.indexOf("giraffe")); // *** -1 เพราะ -1 คือไม่มี
