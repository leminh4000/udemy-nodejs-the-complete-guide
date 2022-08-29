var name = 'Max';
var age=29;
const hasHobbies = true;

const summarizeUser = (username, userAge, userHasHobbies) =>{
    return (
        'Name is ' + username + ' and age is ' + userAge + ' and has HHobbies = ' + userHasHobbies
    );
}


console.log(summarizeUser(name, age, hasHobbies));

const array = [1,2,3,4,5,6,7,8,9,10];

array.push(5);
const squares=array.map(x=>x*x);
//console.log(squares);

const copiedSquares = [...squares];
console.log(copiedSquares);
