// Your code here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun("Chill-Out!"));

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`);
}
console.log(mondayWork("go to the movies"));


// (function wrapAdjective(text = "You are *", emphatic , text2 = "*"){
//    console.log(`${text} ${emphatic} ${text2}`);
// };
// let result = console.log(wrapAdjective("a hard worker"));


//  const wrapAdjective = a => {
//          return function(b = "*"){

//          return`You are ${b}a hard worker${b}!`
//     }
//  }
 

function wrapAdjective(symbol = "*", text = "You are"){
    return function(text2){
        return `${text} ${symbol}${text2}${symbol}!`
    }
    
}
let result = wrapAdjective()("a hard worker");
// let emphatic = result("a hard worker");
console.log(result);


// function wrapAdjective(text = "You are "){
//     return function(symbol, text2){
//         return `${text} ${symbol}${text2}${symbol}!`
//     }
    
// }
// console.log(wrapAdjective()("||", "a dedicated programmer"));