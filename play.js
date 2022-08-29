var name = 'Max';
var age=29;
const hasHobbies = true;

const summarizeUser = (username, userAge, userHasHobbies) =>{
    return (
        'Name is ' + username + ' and age is ' + userAge + ' and has HHobbies = ' + userHasHobbies
    );
}


console.log(summarizeUser(name, age, hasHobbies));