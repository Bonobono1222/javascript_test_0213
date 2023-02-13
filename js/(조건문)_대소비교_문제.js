/*** 1. 대소비교 ***/

function answer(x, y) {
  let result = "";
  
  if(x > y) {
    result = ">";
    // x가 y보다 크면 result에 > 반환
  } else if(x < y){
    result = "<";
    // x가 y보다 작으면 result에 < 반환
  } else if(x == y) {
    result = "=";
    // x가 y랑 값이 같으면 result에 = 반환
  }
  return result;
}

let input = [
  [3, 5],
  [7, 4],
  [2, 2],
]; // 가져올 배열

for (let i = 0; i < input.length; i++) {
  // for문으로 input의 배열 요소를 순회하면서 answer 함수에게 전달한다.
  
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 결과
// #1 <
// #2 >
// #3 =