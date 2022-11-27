/**
 * 자바스크립트 컨벤션
 * https://github.com/ParkSB/javascript-style-guide
 * https://github.com/qkraudghgh/clean-code-javascript-ko
 */

/**
 *
 */
class Person extends Object {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
}

/**
 *
 * @param m
 * @param i
 * @param j
 */
function printInfo(m, i, j) {
    console.log(i + "-" + j
        + ") value=[%o] "
        + "| boolean=[" + Boolean(m[j]) + "] "
        + "| typeof=[" + typeof m[j] + "]",
        m[j]
    );
}

/**
 * 자바스크립트 데이터 타입에 대한 정보
 * - boolean (false | true)
 * - number (include NaN, Infinity)
 * - string
 * - undefined
 * - null (object type)
 * - symbol
 * - object
 * - function
 * - bigint
 *
 * 자바스크립트는 모든 수를 실수로 처리한다. (정수도 실수로 처리)
 * number 에는 8byte 가 할당된다.
 * 더욱 큰 수를 처리하려면 bigInt 를 사용하면 된다.
 * bigInt 는 길이의 제약 없이 정수를 다룰 수 있게 해준다.
 */
const dataType = () => {
    const b_list = [false, true];
    const n_list = [0, 1];
    const s_list = ['', 'ok'];
    const o_list = [{}, {name: 'june1', age: 48}];
    const l_list = [[], [1]];
    const big_list = [BigInt("0"), 1n];
    const map_list = [new Map(), new Map([['name', 'june1'], ['age', 48]])];
    const set_list = [new Set(), new Set(['june1', 48])];
    const type_list1 = [
        b_list,
        n_list,
        s_list,
        o_list,
        l_list,
        big_list,
        map_list,
        set_list,
    ];
    type_list1.forEach((m, i) => {
        [0, 1].forEach((j) => {
            printInfo(m, i, j);
        });
    });
    
    const type_list2 = [
        [undefined],
        [null],
        [dataType],
        [NaN],
        [Infinity],
        [Symbol()],
        [Boolean()],
        [Number()],
        [String()],
    ];
    type_list2.forEach((m, i) => {
        printInfo(m, i, 0);
    });
};

/**
 * 참조형의 데이터 타입이 아닌 경우 다음 2가지 연산으로 비교가 가능하다.
 * boolean, number, string, null, undefined, bigint,
 * === 은 type 과 value 를 모두 비교한다.
 * == 은 type 을 무시하고 강제로 변환하여 value 를 비교한다.
 *
 * object
 * 참조형의 데이터 타입의 경우 값에 대하여 비교할 때
 * Object.entries() 를 활용할 수 있다.
 *
 * symbol 은 무조건 항상 다른 값을 반환한다.
 * function 은 참조형이지만 항상 서로 다르다. (일부러 다른 변수에 할당하지 않는다면..)
 */

const checkEqual = () => {
    /**
     * @type {bigint}
     */
    const bInt1 = BigInt("1");
    const bInt2 = BigInt(1);
    const bInt3 = 1n;
    console.log(`bInt1 === bInt2 :: ${bInt1 === bInt2}`);
    console.log(`bInt2 === bInt3 :: ${bInt2 === bInt3}`);
    console.log(`bInt3 === bInt1 :: ${bInt3 === bInt1}`);
    console.log(`bInt1 === 1 :: ${bInt1 === 1}`);
    console.log(`bInt1 == bInt2 :: ${bInt1 == bInt2}`);
    console.log(`bInt2 == bInt3 :: ${bInt2 == bInt3}`);
    console.log(`bInt3 == bInt1 :: ${bInt3 == bInt1}`);
    console.log(`bInt1 == 1 :: ${bInt1 == 1}`);
    
    /**
     * @type {symbol}
     */
    const s1 = Symbol();
    const s2 = Symbol();
    console.log(`s1 === s2 :: ${s1 === s2}`);
    console.log(`s1 == s2 :: ${s1 == s2}`);
    
    /**
     * function
     */
    function func1() {
    }
    
    function func2() {
    }
    
    console.log(`func1 === func2 :: ${func1 === func2}`);
    console.log(`func1 == func2 :: ${func1 == func2}`);
    
    /**
     * object
     * @type {Person}
     */
    const p1 = new Person('준일', 48);
    const p2 = {age: 48, name: '준일',};
    const b1 = (p1 === p2);
    console.log('p1=[%o] === p2=[%o] ' + `ret=[${b1}]`, p1, p2);
    
    const json_p1 = JSON.stringify(p1);
    const json_p2 = JSON.stringify(p2);
    const b2 = json_p1 === json_p2;
    console.log('json_p1=[%o] === json_p2=[%o] ' + `ret=[${b2}]`, json_p1, json_p2);
    
    const obj_p1 = Object.entries(p1).sort().toString()
    const obj_p2 = Object.entries(p2).sort().toString();
    const b3 = obj_p1 === obj_p2;
    console.log('obj_p1=[%o] === obj_p2=[%o] ' + `ret=[${b3}]`, obj_p1, obj_p2);
};

dataType();
checkEqual();
