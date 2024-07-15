import {odd,even} from './var.mjs';

function checkOddorEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

export default checkOddorEven;