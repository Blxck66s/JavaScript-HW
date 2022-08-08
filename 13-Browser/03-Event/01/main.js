button = button.addEventListener("click", () => alert("1")); // (1)
button.removeEventListener("click", () => alert("1")); // (2)
button.onclick = () => alert(2); // (3)
// คำสั่ง 1,2,3 ทำงาน
