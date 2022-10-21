'use strict';

const result = document.querySelector('.result');

/**
 * Date 객체 사용법
 * - TimezoneOffset()
 * - ISOString()
 */
const dateTime = () => {
    const offset = new Date().getTimezoneOffset();
    const now = Date.now();
    const today = now - offset;
    const date = new Date(today);
    const iso = date.toISOString();
    const time = iso.substring(0, 19);
    result.innerHTML = `
    now: [${now}]</br>
    offset: [${offset}]</br>
    today: [${today}]</br>
    date: [${date}]</br>
    iso: [${iso}]</br>
    ${time}</br>
  `;
    
    const id = setInterval(() => {
        $(".result").empty();
        clearInterval(id);
        console.log("clear");
    }, 10000);
}

/**
 * blue 에는 arrow 함수를..
 * red 에는 일반 함수를..
 * 각각의 함수에서 this 가 무엇을 가리키는지 확인한다.
 */
const thisInArrowFunc = () => {
    class Color {
        constructor() {
            this.blue = () => {
                console.log("blue 함수에서의 this: ", this)
            }
            this.red = function () {
                console.log("red 함수에서의 this: ", this)
            }
        }
    }
    
    const color = new Color();
    const blue = color.blue;
    blue(); //1
    color.blue(); //2
    
    const red = color.red;
    red(); //3
    color.red(); //4
}

/**
 * eval() 은 문자열을 받는다.
 * 받은 문자열이 만약 함수라면 해당 함수를 반환한다.
 * 반환 객체를 실행할 수 있다.
 */
const useEval = () => {
    const tmp1 = () => {
        console.log("arrow 함수에서의 this: ", this)
    }
    
    const ret1 = eval('tmp1');
    console.log(`type: ${typeof (ret1)}`);
    console.log(ret1);
    ret1();
    
    function tmp2() {
        console.log("function 에서의 this: ", this)
    }
    
    const ret2 = eval('tmp2');
    console.log(`type: ${typeof (ret2)}`);
    console.log(ret2);
    ret2();
}

/**
 * input 태그에 입력되는 값을 대문자로 바꾸기
 */
const toUpper = (type) => {
    if (type === 1) {
        $('#to-upper').on('input', e => e.target.value = e.target.value.toUpperCase());
    } else {
        const upper = document.querySelector('#to-upper');
        upper.addEventListener('input',
            e => e.target.value = e.target.value.toUpperCase());
    }
};

dateTime();
thisInArrowFunc();
useEval();
toUpper(2);
