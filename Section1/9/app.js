// const person: {
//   name: string;
//   age: number;
// } = {
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// tuple 타입 지정
// let arr: [string, number] = ["name", 2];
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLEY"] = 6] = "READ_ONLEY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// push에는 길이 고정이 되지 않는다.
// person.role.push("admin");
// tuple 타입을 지정할 경우 에러 발생
// person.role[1] = 10;
var favoriteActivities; // 단일 타입 배열이므로 혼합 배열에선 사용하지 못한다.
// let favoriteActivities: any[];  // 혼합 배열에서 any타입으로 받지만 자주 사용하지 않는다.
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
    console.log("AUTHOR");
}
