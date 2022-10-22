function add(n1: number, n2: number, showResult: boolean, parase: string) {
  const reuslt = n1 + n2;
  if (showResult === true) {
    console.log(resultPhrase + reuslt);  // 7.8 number로 더하고 문자로 붙임
    console.log(resultPhrase + n1 + n2);  // 52.8 string으로 더해짐
  } else {
    return n1 + n2;
  }
}

// let number1: number = 5;   // 한줄로 타입과 값을 할당할 수 있다.

let number1: number;
number1 = 5;    // 숫자가 아닌 다른 타입을 지정하면 오류가 난다.
const number2 = 2.8;
const preintResult = true;
const resultPhrase = "Result is: ";
// resultPhrase = 0;  // 타입 추론에 의한 오류 발생

add(number1, number2, preintResult, resultPhrase);
