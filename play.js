/*var name = 'Max';
var age=29;
const hasHobbies = true;

const summarizeUser = (username, userAge, userHasHobbies) =>{
    return (
        'Name is ' + username + ' and age is ' + userAge + ' and has HHobbies = ' + userHasHobbies
    );
}


console.log(summarizeUser(name, age, hasHobbies));*/

const array = [1,2,3,4,5,6,7,8,9,10];

array.push(5);
const squares=array.map(x=>x*x);
//console.log(squares);

const copiedSquares = [...squares];
console.log(copiedSquares);

//destructuring assignment
let a,b, rest;
[a,b]=[10,20];

console.log(a);
console.log(b);
[a,b, ...rest] = [10,20,30,40,50,60,70,80,90];
console.log(rest);

const person = {
    name: 'John',
    age: 21,
    greet(){
        console.log(`Hello I am ${person.name}`);
    }
}

const printName=({name,greet})=>{console.log(name);greet();}
printName(person);

const {name,age}=person;
console.log(name,age);

setTimeout(()=>{console.log('Timer is done!')}, 10);

console.log('Hello');
console.log('Hi');