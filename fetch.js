const student ={
    name: 'Romel',
    age: 32,
    moviess: ['king khan','dhakar mastenh']
}
const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);
const keys = Object.keys(student)
const values = Object.values(student);
const numbers = [10,20,2405.7,90,96];
numbers.forEach(number => console.log(number))
numbers.map(num => num*2)
// add or remove 
const products = 
[
    {name: 'laptop', price: 34000, brnad: 'hp' , color: 'black'},
    {name: 'phone', price: 7000, brnad: 'iphone' , color: 'golden'},
    {name: 'watch', price: 300, brnad: 'casio' , color: 'yellow'},
    {name: 'sunglass', price: 34000, brnad: 'ribon' , color: 'gray'},
]
const newProduct = {name: 'webcam', price:700, brand:'lal'};
const newProducts = [...products,newProduct];
console.log(newProducts);
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);