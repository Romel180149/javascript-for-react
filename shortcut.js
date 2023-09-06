// 
let myVar = 5;
if(myVar){
    myVar =myVar*100
}
else{
    myVar = 0
}

let myMoney = 70;
if(!myMoney){

}
const money = 120;
let food
if(money > 80 ){
    food = 'biriyANI'
}
else{
    food= 'cha biscuit'
}
let food1 = money> 100 ? 'biriyani' : 'cha biscuit'
// console.log(food1);
let drink = money > 100 && myVar>100 ?  'coke' : 'filter water'
// console.log(drink);
const num1 = 52 ;
const numString = num1 + ''
console.log(numString);
const input = '780';
const inputNumber =  +input
console.log(input);
console.log(inputNumber);
const isActive = false;
const showUser =() => console.log('displsya uset');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser()
isActive || showUser()
isActive = !isActive