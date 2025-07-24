console.log('안녕!');

// 변수상자 만들기

// 자바스크립트는 변수상자의 크기를 명시하지 않음 (내부에선 다르다. string number boolean 세가지 종류가 있다.)
// 값을 넣었을 때 크기가 정해진다.
// 자바의 경우 String name1;
let name1; // 변수상자의 크기 모른다.
name1 = '홍길동1'; // 변수상자의 크기는 string이다.
console.log(`name1 변수상자의 값 : ` + name1);
console.log(`name1 변수상자의 값 : ${name1}`);

let name2 = '홍길동2';
console.log(`name2 변수상자의 값 : ${name2}`);

let age1 = 21;
console.log(`age1 변수상자의 값 : ${age1}`);

console.log(`name1 변수상자의 크기 : ${typeof(name1)}`);
console.log(`age1 변수상자의 크기 : ${typeof(age1)}`); // 소수점과는상관없음

let visible = true;
console.log(`visible 변수상자의 크기 : ${typeof(visible)}`);

let age2; // 변수상자의 크기를 모른다. -> undefind (출력값)
console.log(`age2 변수상자의 크기 : ${typeof(age2)}`);

if (typeof(age2) == 'undefined') {
    console.log(`age2 변수상자의 크기를 알 수 없습니다.`);
} else if (typeof(age2) == `string`) {
    console.log(`age2 변수상자의 크기는 string 입니다.`);
}

age2 = 22;

if (age2) {
    console.log(`age2 변수상자의 크기가 결정되어 있습니다. : ${typeof(age2)}`);
}