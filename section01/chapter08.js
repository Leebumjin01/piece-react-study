// null 병합 연산자, 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
// 왼쪽 값이 null, undefined가 아니면 오른쪽 값을 무시하고, 왼쪽 값을 반환

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

// console.log(var4); // 10
// console.log(var5); // 20
console.log(var6);

// 2. type of 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1; // number
var7 = "hello"; // string
var7 = true; // boolean

let t1 = typeof var7;
// console.log(t1);

// 3. 삼항 연산자

let var8 = 10;

// 10 % 2 === 0 이면 참이면 왼쪽(짝수), 거짓이면(홀수) 를 res변수에 대입
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// console.log(res); // 짝수
