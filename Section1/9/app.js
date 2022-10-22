// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities; // 단일 타입 배열이므로 혼합 배열에선 사용하지 못한다.
// let favoriteActivities: any[];  // 혼합 배열에서 any타입으로 받지만 자주 사용하지 않는다.
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
