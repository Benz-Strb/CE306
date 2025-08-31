products = [
    {price: 12500, discount: 20},
    {price: 7200, discount: 10},
    {price: 22500, discount: 25},
    {price: 42000, discount: 30},
    {price: 5500, discount: 7},
    {price: 8000, discount: 5}
];

function calculateTotal() {
    products.forEach(products => {
        console.log(`Total price after discount: ${price = products.price-((products.discount/100)*products.price)}`);
    })
}

calculateTotal()