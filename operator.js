'use strict'

/**
 * '==', '!=' 연산은 자동으로 타입 캐스팅을 하여 값을 비교한다.
 * '===', '!==' 연산은 타입 조건까지 검사하여 비교한다.
 * object 는 주소값을 비교한다.
 */
const str = '5';
const num = 5;
console.log((str == num));
console.log((str != num));
console.log((str === num));
console.log((str !== num));

const p1 = {
    name: 'june1',
    age: 46
}

const p2 = {
    name: 'june1',
    age: 46
}

const p3 = p1;

console.log(p1 == p2);
console.log(p1 === p2);
console.log(p1 === p3);
