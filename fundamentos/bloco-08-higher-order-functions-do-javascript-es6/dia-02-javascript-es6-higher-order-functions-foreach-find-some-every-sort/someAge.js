const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 17 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((currentName) => currentName.age >= minimumAge)
};

console.log(verifyAges(people, 18));