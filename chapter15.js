//객체 생성성
let obj1 = new Object();//객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

let person = {
    name: "이정환",//key:value
    age: 27,
    hobby: "테니스",
    job: "FE Developer",
    extra: {}, //객체가 value값이 될 수도 잇어
    10: 20, // 숫자 값을 키 값으로 쓸 수도 잇어
    "like cat": true // 띄어쓰기가 포함 된 키 일떄는 따옴표 필요
};

let name = person.name;
//let name = person.name2;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);


person.job = "fe devrloper";
person["favoriteFood"] = "떡볶이"

console.log(person.favoriteDood);

person.job = "educater";
person["favoriteFood"] = "초콜릿";

console.log(person.job);
console.log(person.favoriteFood);
console.log(person);

delete person.job;
delete person["favoriteFood"];
console.log(person);

let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
console.log(`result2의 값은 ${result2}입니다.`);