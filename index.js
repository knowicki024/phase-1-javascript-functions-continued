// code your solution here
//test 1
function saturdayFun(rollerskate = "roller-skate") {
    return `This Saturday, I want to ${rollerskate}!`;
}

console.log(saturdayFun());

//test 2
const mondayWork = function(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`;
     } else {
            return "This Monday, I will go to the office.";
        }}

console.log(mondayWork());

//test 3
function wrapAdjective(highlight = "*") {
    return function(encouragement = "a hard worker") {
return `You are ${highlight}${encouragement}${highlight}!`
}
}

