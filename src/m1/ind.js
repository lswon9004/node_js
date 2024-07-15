const {odd, even} = require('./var');
const checknumber = require('./func');

function checkStringOddorEven(num){
    if(num.length%2){
        return odd;
    }
    return even;
}

console.log(checknumber(10));
console.log(checkStringOddorEven('hello'));