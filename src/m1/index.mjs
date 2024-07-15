import {odd,even} from './var.mjs';
import checkOddorEven from './func.mjs';

function checkStringOddorEven(str){
    if(str.length%2){
        return odd;
    }
    return even;
}

console.log(checkOddorEven(10));
console.log(checkStringOddorEven("hello"));