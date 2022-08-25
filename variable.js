'use strict';

/**
 * << 변수 선언의 종류 >>
 * var 키워드는 쓰지 않아야 한다.
 * - 1.hoisting 이 발생하기 때문이다.
 * - 2.block scope 를 무시하기 때문이다.
 *
 * 가능하면 const 를 통해 사용하는 것이 좋다.
 * - 1.값 수정이 불가능하므로 보안상 좋다.
 * - 2.개발자의 실수를 줄여준다.
 * - 3.쓰레드 사용에 안전하다.
 */
var age = 46;
let name = 'june1';
const mail = true;

/**
 * << 데이터의 종류 >>
 *  변수의 종류는 7가지가 있다.
 *  primitive type 6가지
 *  - 1.number
 *  - 2.string
 *  - 3.boolean
 *  - 4.null
 *  - 5.undefined
 *  - 6.symbol (고유한 식별자 값을 얻기 위해 사용)
 *  reference type 1가지
 *  - 1.object
 *
 *  object 에는 6가지 종류가 있다.
 *  - 1.Array
 *  - 2.Function
 *  - 3.Date
 *  - 4.RegExp
 *  - 5.Map, WeakMap
 *  - 6.Set, WeakSet
 */

/**
 * << number >>
 * 자바스크립트는 정수든 소수든 8byte 를 할당한다.
 * 심지어 다음과 같은 결과도 number 이다.
 */
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nan = name / 1;
console.log(`${infinity}: [${typeof infinity}]`);
console.log(`${negativeInfinity}: [${typeof negativeInfinity}]`);
console.log(`${nan}: [${typeof nan}]`);

/**
 * << string >>
 * `...` 을 사용하여 문자열을 쉽게 사용할 수 있다.
 * 변수 삽입이 쉽고, 개행문자 사용도 가능하며, 문자열의 덧셈도 직관적이다.
 */
console.log(''
    + `hello ${name}, you are ${age} years old and male..\n`
    + `is it true? ${mail}!`);

/**
 * << boolean >>
 * 다음 5가지 값들은 거짓이다.
 * 그 외의 것들은 모두 참이다.
 * 비어 있는 객체도 참이다.
 */
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

/**
 * << null >>
 * 값이 없음을 의미한다.
 * null 의 typeof 값은 object 이다.
 * 조심해야 한다.
 */
console.log(typeof null);

/**
 * << undefined >>
 * 존재하지 않는 변수나..
 * 혹은 아직 메모리가 할당되지 않은 변수에 접근하면
 * undefined 를 반환받는다.
 *
 * 1.함수를 호출할 때 값이 할당되지 않은 매개변수
 * 2.함수의 반환값이 없을 때 받은 return 값
 * 3.존재하지 않는.. 변수나 객체의 속성(필드나 메서드)
 */

/**
 * << symbol >>
 * Symbol 은 고유한 값을 얻기 위해 사용한다.
 */
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(symbol1.description);
console.log(symbol2.description);

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4);
console.log(symbol3.description);
console.log(symbol4.description);

/**
 * << casting >>
 * JavaScript 는 다이나믹 캐스팅이 가능하다.
 * 왜냐하면 변수가 가리키는 곳에 실제 변수의 값이 아니라 주소가 있기 때문이다.
 * 어떤 값을 대입하든 그 값의 위치 정보인 주소가 입력된다.
 * 하지만 다이나믹 캐스팅은 매우 위험하다.
 */

/**
 * << object >>
 * object 를 생성하는 방법은 여러가지 존재한다.
 */
const june1 = {
    name: "준일님",
    age: 46,
    male: true
}
console.log(june1);
