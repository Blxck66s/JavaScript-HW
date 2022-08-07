const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

function getAverageScore(arr) {
  summ = arr.reduce((sum, item) => (sum = sum + item.score * item.weight), 0);
  return summ;
}

console.log(getAverageScore(scores));
