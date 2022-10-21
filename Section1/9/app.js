function add(n1, n2, showResult, parase) {
    var reuslt = n1 + n2;
    if (showResult === true) {
        console.log(resultPhrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var preintResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, preintResult, resultPhrase);
