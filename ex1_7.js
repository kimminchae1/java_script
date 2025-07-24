// 붕어빵 만들기

let fish1 = {
    name: '홍길동1',
    age: 21
}
console.log(`fish1 변수상자에 들어있는 붕어빵의 이름은? : ${fish1.name}`);

// fish2 라는 변수상자 안에 swim 이라는 함수상자 넣기
// 아래의 경우 익명함수를 권장 (화살표 함수를 쓰면 이름이 undefined로 출력됨 -> this)
// name과 age는 변수상자가 아니라 속성이다.
let fish2 = {
    name: '홍길동2',
    age: 22,
    swim: function() {
        console.log(`물고기가 헤엄칩니다 : ${this.name}`);
    }
}
fish2.swim();

// 붕어빵틀
class Fish {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    swim() {
        console.log(`붕어빵이 헤엄칩니다 : ${this.name}`);
    }

}

let fish3 = new Fish(`붕어빵1`, 1);
console.log(`fish3 변수상자에 들어있는 붕어빵의 이름은? : ${fish3.name}`);
fish3.swim();