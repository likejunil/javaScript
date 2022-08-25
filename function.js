'use strict'

/**
 * func1() 처럼 선언하고 변수에 할당하지 않은 함수는 버그의 원인이 된다.
 * 선언만 하고 변수에 할당하지 않은 함수들은 hosting 된다.
 * 선언하기 전에 호출해도 정상 작동한다.
 * 매우 위험하고 나쁜 흐름이다.
 */
func1('당장 올라오세요', '함수님');

/**
 * 파라미터 디폴트값은 반드시 뒤에서부터 정해야 한다.
 * 값이 전달되지 않은 파라미터는 undefined 가 된다.
 * 선언되지 않은(함수의 선언에 없는) 파라미터가 전달되면.. 그냥 무시한다.
 *
 * @param message
 * @param from
 */
function func1(message, from = '아무개') {
    console.log(`[${message}]가 [${from}]으로부터 도착했습니다.`);
}

func1('식사 하셨습니까?');
func1();
func1('잘 잤어?', '효진님', 1000);

/**
 * 다음은 이름 없는 함수(anonymous function)이다.
 * 함수를 변수에 담았으므로 hosting 되지 않는다.
 * 임의의 개수로 구성된 데이터를 함수의 인자로 전달할 수 있다.
 * 특별히 반환하는 데이터가 없다면 undefined 를 반환하는 것과 같다.
 * @param args
 * @returns {undefined}
 */
const func2 = function (...args) {
    args.forEach(m => console.log(m));
}
const ret = func2('red', 'green', 'black');
console.log(ret);

/**
 * 함수 이름을 지정하여 정의하고 변수에 담을 수도 있다.
 * 이러한 함수를 named function 이라고 한다.
 * 변수에 할당한 함수는 hosting 되지 않는다.
 * 함수 이름으로는 해당 함수를 호출할 수 없다.
 * 함수의 이름은 디버깅할 때 사용하거나 재귀호출에 사용할 수 있다.
 * @param i
 * @returns {number|*}
 */
const fibonacci = function f(i) {
    if (i == 1 || i == 2) return 1;
    return (f(i - 2) + f(i - 1));
}
console.log(fibonacci(7));

/**
 * 함수를 더욱 간단히 표현하기 위해 Arrow function 을 사용할 수 있다.
 * Arrow function 은 항상 anonymous function 이다.
 */
const func3 = () => console.log('화살표 함수는 넘나 간단해서 좋다..');
func3();

/**
 * 함수를 선언함과 동시에 즉시 실행하는 경우도 있다.
 * 이러한 함수를 IIFE(Immediately Invoked Function Expression)라고 한다.
 */
(function () {
    console.log('즉시 실행하랏~!!');
})();
