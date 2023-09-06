const products = 
[
    {name: 'laptop', price: 34000, brnad: 'hp' , color: 'black'},
    {name: 'phone', price: 7000, brnad: 'iphone' , color: 'golden'},
    {name: 'watch', price: 300, brnad: 'casio' , color: 'yellow'},
    {name: 'sunglass', price: 34000, brnad: 'ribon' , color: 'gray'},
]
const brands = products.map(product => product.brnad)
// console.log(brands);
const prices = products.map(product => product.price)
// console.log(prices);
// products.forEach(product=> console.log(product.brnad))
const cheap = products.filter(product =>product.price<5000)
// console.log(cheap);
const specificName = products.filter(p=>p.name.includes('n'));
console.log(specificName);
const special = products.find(p=> p.name.includes('n'));
console.log(special);