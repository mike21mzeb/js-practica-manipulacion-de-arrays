const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );


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
    {
        customerName: "Ricolas",
        total: 2322,
        delivered: false,
      },
  ];
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));