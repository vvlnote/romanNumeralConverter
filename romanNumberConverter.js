function getRomanSymbol(num, numRomanMap, modulus){
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
            key = num+1; //to break out this while loop
        }
    }
    highNum = key;
    //console.log("lowNum = " + lowNum + " highNum = "+ highNum);
    if(num === highNum){
        roman = numRomanMap.get(num);
    }else {
        if (num === (highNum - baseNum)){
            roman = baseRomanSymbol + numRomanMap.get(highNum);
        }
        else {
            roman = numRomanMap.get(lowNum);
            //console.log("roman = " + roman);
            //console.log(num%lowNum);
            var tempNum = lowNum;
            while (num > tempNum){
                roman = roman+baseRomanSymbol;
                tempNum += baseNum; 
            }
        }
    }
    //console.log(num);
    //console.log(roman);
    return roman;
}

function convertToRoman(num) {
 //Set up the Number and Roman Symbols map
 if (typeof process.argv[2] !== "undefined"){
    num = process.argv[2];
 }
 console.log("input num = " + num);
 var numRomanMap = new Map();
 numRomanMap.set(1, "I");
 numRomanMap.set(5, "V");
 numRomanMap.set(10, "X");
 numRomanMap.set(50, "L");
 numRomanMap.set(100, "C");
 numRomanMap.set(500, "D");
 numRomanMap.set(1000, "M");

 var numBase = 1;
 var modulus = 10;
 var romanStr = "";
 while (num != 0){
     var reminder = num % modulus;
     var romanSymbol = getRomanSymbol(reminder, numRomanMap, modulus);
     romanStr = romanSymbol + romanStr;
     num = num - reminder;
     modulus *= 10;
 }

 console.log("converted Roman Numeral = " + romanStr);
 
 return romanStr;
}

convertToRoman(3001);