inputnickname = document.querySelector("input:first-of-type");
inputnickname.addEventListener("click", (event) => {
  console.log(inputnickname.name);
});
inputjob = document.querySelector("input:last-of-type");
inputjob.addEventListener("click", (event) => {
  console.log(inputjob.name);
});

function showNickName() {
  console.log(inputnickname.value);
}
function showJob() {
  console.log(inputjob.value);
}
