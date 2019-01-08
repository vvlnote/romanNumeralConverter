function getRomanSymbol(num, modulus){
    if(num === 0){
        return "";
    }
    var roman = "";
    var lowNum = 0;
    var highNum = 0;
    var key = 0;
    var baseNum = modulus/10;
    var baseRomanSymbol = numRomanMap.get(baseNum);
    var iterator = numRomanMap.keys();
    //assume the keys of numRomanMap are sorted
    key = iterator.next().value;
    while(num > key){
        lowNum = key;
        key = iterator.next().value;
        if(typeof key === "undefined"){
            //the num is bigger than the biggest key
           break;
        }
    }
    if(key === "undefined"){
        highNum = num + 1;
    } else {
        highNum = key;
    }
    //console.log("lowNum = " + lowNum + " highNum = "+ highNum);
    if(num === highNum){
        roman = numRomanMap.get(num);
    }else {
        if (num === (highNum - baseNum)){
            roman = baseRomanSymbol + numRomanMap.get(highNum);
        }
        else {
            roman = numRomanMap.get(lowNum);
            var tempNum = lowNum;
            while (num > tempNum){
                roman = roman+baseRomanSymbol;
                tempNum += baseNum; 
            }
        }
    }
    return roman;
}

function convertToRoman(num) {
 var modulus = 10;
 var romanStr = "";
 while (num != 0){
     var remainder = num % modulus;
     var romanSymbol = getRomanSymbol(remainder, modulus);
     romanStr = romanSymbol + romanStr;
     num = num - remainder;
     modulus *= 10;
 }

 console.log("converted Roman Numeral = " + romanStr);
 
 return romanStr;
}

var num;
if (typeof process.argv[2] !== "undefined"){
var temp = process.argv[2];
num = parseFloat(temp);
}
else {
    num = 3001;
}
if((num < 1 ) || (num >= 4000)) {
console.log("Please input positive integer number between 1 and 3999");
return "";
}
if(Number.isInteger(num) !== true)
{
console.log("Please input positive integer number between 1 and 3999");
return "";
}
console.log("input num = " + num);
//Set up the Number and Roman Symbols map
const numRomanMap = new Map([
    [1, "I"], 
    [5, "V"], 
    [10, "X"], 
    [50, "L"], 
    [100, "C"], 
    [500, "D"], 
    [1000, "M"]]);

convertToRoman(num);