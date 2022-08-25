'use strict'

/**
 * class 는 ES6 에서 생겼다.
 * 그 이전에는 function 을 사용하여 object 를 생성했다.
 * class 는 내부적으로 function 을 사용하여 object 를 생성한다.
 */
class Person {

    /**
     * << static field >>
     * static 키워드를 통해 클래스에 종속되는 변수를 사용할 수 있다.
     * @type {number}
     */
    static population = 0;

    /**
     * << private field >>
     * field 이름 앞에 '#'를 붙이면 private 속성이 부여된다.
     * 이러한 field 들은 내부 method 를 통해서만 접근이 가능하다.
     * @type {number}
     */
    #money = 0;

    /**
     * << constructor >>
     * @param name
     * @param age
     */
    constructor(name, age) {
        console.log(`생성자를 호출합니다.`);

        /**
         * static 변수는 클래스 이름으로 접근한다.
         */
        Person.population++;

        this.name = name;

        /**
         * setter() 메서드가 존재하는 경우..
         * this.age = age 와 같이 할당을 시도하면
         * set age() 를 호출한다.
         */
        this.age = age;
    }

    /**
     * << static method >.
     * static 키워드를 통해 클래스에 종속되는 메서드를 사용할 수 있다.
     */
    static printPopulation() {
        console.log(`현재 인구수는 [${Person.population}]입니다.`)
    }

    /**
     * << getter >>
     * this.age 를 사용하는 순간 get age() 가 호출된다.
     * 그런데 get age() 내부에서 다시 this.age 가 호출된다.
     * 결국 무한히 되풀이된다.
     * 이러한 문제를 방지하기 위해 getter 에서 age 변수에 접근할 때는 _age 를 사용한다.
     * @returns {number}
     */
    get age() {
        console.log(`나이 정보를 제공합니다.[${this._age}]`);
        return this._age;
    }

    /**
     * << setter >>
     * '=' 를 통해 this.age 에 할당하려는 순간 set age() 가 호출된다.
     * set age() 내부에서 다시 '=' 를 통해 this.age 에 할당하려고 한다.
     * 결국 무한히 되풀이된다.
     * 이러한 문제를 방지하기 위해 setter 에서 age 변수에 접근할 때는 _age 를 사용한다.
     * @param value
     */
    set age(value) {
        this._age = value < 0 ? 0 : value;
        console.log(`나이 정보를 입력합니다.[${this._age}]`);
    }

    /**
     * << private method >>
     * method 이름 앞에 '#'를 붙이면 private 속성이 부여된다.
     */
    #hiddenShow() {
        console.log(`이제 ${this.#money} 를 갖고 있습니다.`);
    }

    pay(amount) {
        console.log(`${amount} 를 소비했습니다.`);
        this.#money = this.#money - amount;
        this.#hiddenShow();
    }

    earn(amount) {
        console.log(`${amount} 를 벌었습니다.`);
        this.#money = this.#money + amount;
        this.#hiddenShow();
    }
}

const june1 = new Person('june1', -4);
console.log(`이름은 ${june1.name} 입니다.`);
june1.age = 46;
console.log(`나이는 ${june1.age} 입니다.`);
june1.earn(1000);
june1.pay(100);
Person.printPopulation();

/**
 * 클래스는 상속하여 사용할 수 있다.
 */
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`높이:[${this.width}] 너비:[${this.height}] 도형을 열심히 그립니다.`);
    }

    area() {
        console.log(`신속히 면적을 구합니다.`);
    }
}

class Triangle extends Shape {
    constructor(width, height, name) {
        super(width, height);
        this.name = name;
    }

    /**
     * 메서드를 override 할 수 있다.
     */
    draw() {
        super.draw();
        console.log(`[${this.name}] 삼각형을 그립니다.`);
    }

    area() {
        const area = (this.width * this.height) / 2;
        console.log(`삼각형의 면적은 [${area}]입니다.`);
    }
}

const triangle = new Triangle(5, 10, '피타고라스');
triangle.draw();
triangle.area();
