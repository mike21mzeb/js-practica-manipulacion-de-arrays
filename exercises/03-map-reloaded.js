const orders = [
  {
    customerName: "Ricolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zunilda",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santi",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valery",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);
