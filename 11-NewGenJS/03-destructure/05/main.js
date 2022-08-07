let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *เพาระใช้ rest opp รวบ objectหลัง ตำแหน่งแรกมาไว้ใน discoveryYears
