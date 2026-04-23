// var password = "bbbbhj"
// var neme ="user"
// var age = 25
// var isActive = true
const orders = [
  {
    id: 1,
    customer: "Jhon",
    items: [
      { name: "Ноутбук", price: 50000, quantity: 1 },
      { name: "Мышь", price: 1500, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Alan",
    items: [
      { name: "Телефон", price: 30000, quantity: 1 },
      { name: "Чехол", price: 1000, quantity: 3 }
    ]
  },
  {
    id: 3,
    customer: "Jane",
    items: [
      { name: "Клавиатура", price: 2500, quantity: 1 },
      { name: "Монитор", price: 12000, quantity: 1 }
    ]
  }
];
 totalRevenue = 0;
 maxOrder = 0;
 topCustomer = "";

orders.forEach(order => {
  let orderSum = 0;

  order.items.forEach(item => {
    orderSum += item.price * item.quantity;
  });

  console.log(`Заказ ${order.id} (${order.customer}): ${orderSum} сом`);

  totalRevenue += orderSum;


  if (orderSum > maxOrder) {
    maxOrder = orderSum;
    topCustomer = order.customer;
  }
});

console.log("Общий доход магазина:", totalRevenue, "сом");

console.log("Самый дорогой заказ сделал:", topCustomer);