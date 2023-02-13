/* 최솟값 구하기 */

function answer(x, y) {
  // x와 y라는 매개변수 or 파라미터로 받아서 그 중 최솟값을 반환하는 함수
  let min;
  // 찾아낸 값을 min에 넣어주려고 빈 변수를 선언

  min = x > y ? y : x;
  // x > y (조건) ? 첫번째 값 : 두번째 값 -> 삼항 연산자
  // 물음표 앞에 조건이 true인 경우에는 물음표 바로 다음인 첫번째 값(value1)이 실행 false인 경우에는 두번째 값(value2)이 실행된다.
  // 조건문을 간결하게 표현하기 위해서 사용하는 연산자
  // x와 y 중에 더 작은 값을 min이라는 변수에 할당하는 코드
  // 만약 x가 y 보다 크면 y를, 그럴지 않을 경우 x를 min이라는 변수에 할당한다.

  return min;
}

let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  // for문으로 input의 배열 요소를 순회하면서 answer 함수에게 전달한다.

  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 결과
// #1 3
// #2 -3
// #3 525
