// 함수상자 만들기

// 자바
// int add(int a, int b) {
//    return a + b;
// }

    function add(a, b) {
      return a + b;
   }

   let output1 = add(10, 10);
   console.log(`더하기 결과 : ${output1}`);

   function print(a) {
        console.log(`print 함수상자 안에서 a 상자의 값 : ${a}`)
   }

   print(10);

   // 함수상자를 변수상자에 넣기 (할당한다)
   // 자바스크립트에선 변수상자에 함수상자를 집어넣을 수 있다. (자바에선 안됨)
   // 자바스크립트에선 함수를 일급 객체(first-class citizen)로 다룬다.

   let show = print;
   show(20);


   // 함수상자를 만들면서 변수상자에 즉시 할당하기 = 변수상자를 만들면서 함수상자로 초기화하기

   // 익명 함수 (변수상자에 즉시 할당하는 함수에는 이름을 생략한다.)
   let show2 = function () {
       console.log(`print2 함수 실행됨.`);
   }
   // 화살표 함수 (익명함수와 같은 걸 의미)
   let show3 = () => {
       console.log(`print2 함수 실행됨.`);
   }

   // 예시
   function add2(a, b) {
       return a + b;
   }

   let output2 = add2(10, 10);
   console.log(`더하기 결과 : ${output2}`);

   // 콜백 함수
   function add3(a, b, c) {
    c(a + b);
   }

   add3(10, 10, (output) => {
       console.log(`더하기 결과 : ${output}`);
   })