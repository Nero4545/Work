```javascript
var order = { 
  "id": 2113, 
  "orderNumber": "E210126001", 
  "createdAt": "2021-01-26 16:04:24", 
  "clientName": "Kalle Tali", 
  "deliveryType": "Omniva smartpost", 
  "deliveryValue": 178, 
  "rows": [ 
    { 
      "article_id": 31, 
      "name": "Coffee Machine De'Longhi Dolce Gusto Piccolo EDG100.W", 
      "product_code": "257549", 
      "price": 49.1666666667, 
      "amount": 1, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23420, 
      "name": "Coffee Capsules Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 pcs", 
      "product_code": "355836", 
      "price": 5.0666666667, 
      "amount": 2, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23421, 
      "name": "Coffee Capsules Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 pcs", 
      "product_code": "000000000501267301", 
      "price": 5.825, 
      "amount": 1, 
      "vat": 0.2 
    } 
  ] 
};

// Function to calculate the total cost of an item with VAT
function calculateTotalWithVAT(price, amount, vat) {
  const priceWithoutVAT = price * amount;
  const totalPrice = priceWithoutVAT * (1 + vat);
  return totalPrice.toFixed(2);
}

// Iterate through all order rows and display information about each item
order.rows.forEach(row => {
  const totalItemPrice = calculateTotalWithVAT(row.price, row.amount, row.vat);
  console.log(`Product Name: ${row.name}`);
  console.log(`Quantity: ${row.amount}`);
  console.log(`Price per Unit: ${row.price.toFixed(2)}`);
  console.log(`Total Cost: ${totalItemPrice}`);
  console.log("---------------------");
});

// Calculate the total cost of the order
const totalOrderPrice = order.rows.reduce((total, row) => {
  const priceWithoutVAT = row.price * row.amount;
  const totalPrice = priceWithoutVAT * (1 + row.vat);
  return total + totalPrice;
}, 0).toFixed(2);

console.log(`Total Order Cost: ${totalOrderPrice}`);
```
