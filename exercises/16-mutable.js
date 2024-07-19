const products = [
  { title: "Pizza", price: 121, id: "123" },
  { title: "Burger", price: 121, id: "124" },
  { title: "Hot cakes", price: 121, id: "125" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "123" },
    { title: "Burger", price: 121, id: "124" },
    { title: "Hot cakes", price: 121, id: "125" },
  ];
const update = {
    id: "125",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);