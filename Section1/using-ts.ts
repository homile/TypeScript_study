const button = document.querySelector("button");
// 요소를 얻을 때, 뒤에 !(느낌표)를 추가해주면 요소를 얻는 다는 것을 타입스크립트에 알릴 수 있다.
// null을 받아오지 않을 것을 알려주는 것이다.
// 항상 input 요소이기 때문에 형 변환이라는 as HTMLInputElement로 사용할 수 있다.
// 타입스크립트에 이것이 어떤 유형의 요소인지를 알려주기 위함이다.
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// 타입지정: 변수명 뒤에 콜론을 붙인뒤 타입을 명시한다.
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
