function sortProducts(){
    let products = [
        { name: "Apple", price: 1.2 },
        { name: "Banana", price: 0.5 },
        { name: "Cherry", price: 2.0 },
        { name: "Date", price: 1.5 },
        { name: "Elderberry", price: 3.0 }
    ]
    products.sort( (a, b) => {
        return a.price - b.price;
    });
    return products;
}
console.log(sortProducts());
