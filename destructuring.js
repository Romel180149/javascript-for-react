const numbers = [10,20,70]
// const x = numbers[0]
// const y = numbers[1]
const [x,y] = [42,16]
function boxify(num1,num2) {
   const nums = [num1,num2] 
   return nums;
}
// const [first,second] = boxify[90,34]
// console.log (boxify(90,34));
const student ={
    name: 'romel',
    movies:['three ediort','dhaka mastan'],
    age: '32'

}
const[firstmovie,secondmovie] = student.movies;
const {name,age} = {name:'alu', age:32};
// const { name,age,salary } = { id:12  , name:'alu',  salary:32000, age:32 }
const employee ={
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html','css','javascript'],
    specfication: {
        height: 66,
        weight: 67,
        addres:'kumrkhali',
        drink:'water'
    }
}
const{machine,ide} =employee;
const{height,weight} = employee.specfication