//1. 랜덤 번호를 담을 변수 지정
let randomNum = 0;

//2. 랜덤 번호를 만들 함수 생성
function randomNumPick() {
  //Math.floor(Math.random()*100) => random()은 1은 미포함이기 때문에 0~99까지의 범위가 된다
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답 :: ", randomNum);
}
randomNumPick();

//3.GO 버튼 클릭시 발생할 이벤트
//GO버튼
let goBtn = document.querySelector(".playBtn");
//유저가 입력한 값 들고오기
let inputValue = document.querySelector(".userNum");
inputValue.addEventListener("click", (e) => (inputValue.value = ""));

//결과를 알려줄 Text
let answerText = document.querySelector(".answer");

//게임 도전 기회
let chances = 5;

//게임 도전 기회를 표시할 영역
let chanceArea = document.querySelector(".chanceArea");

//게임이 끝났는지 여부를 알 수 있는 변수
let gameOver = false;

//유저가 입력한 값들 저장
let pushNum = [];

function play() {
    console.log(inputValue.value);
  if (pushNum.includes(inputValue.value)) {
    answerText.innerHTML = "이미 입력한 숫자입니다.";
    return;
  }

  if (inputValue.value > 101) {
    answerText.innerHTML = "100보다 큰 값을 입력했습니다.";
    return;
  } else if (inputValue.value < 1) {
    answerText.innerHTML = "1보다 작은 값을 입력했습니다.";
    return;
  } else if (
    inputValue.value == null ||
    inputValue.value == undefined ||
    inputValue.value == ""
  ) {
    console.log(inputValue.value);

    answerText.innerHTML = "값이 입력되지 않았습니다!";
    return;
  }
  chances--;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;

  if (inputValue.value < randomNum) {
    answerText.innerHTML = "👍UP!!👍";
    answerText.classList.add("up");
    answerText.classList.remove("down");
  } else if (inputValue.value > randomNum) {
    answerText.innerHTML = "👎DOWN!!👎";
    answerText.classList.add("down");
    answerText.classList.remove("up");
  } else {
    answerText.innerHTML = "👌정답입니다!!👌";
    chanceArea.innerHTML = "";
    gameOver = true;
    answerText.classList.add("good");
  }

  pushNum.push(inputValue.value);

  if (chances < 1 && inputValue.value != randomNum) {
    gameOver = true;
    answerText.innerHTML = "다음 기회에!!";
  }

  //gameOver가 true일 경우 GO버튼 비활성화
  if (gameOver) {
    goBtn.disabled = true;
    goBtn.innerHTML = "🔒";
    goBtn.classList.add("nonHover");
  }
}
goBtn.addEventListener("click", play);

//4. Reset버튼 이벤트 생성
function resetEvent() {
  //input을 비우기
  inputValue.value = "";
  //새로운 랜덤 숫자 생성
  randomNumPick();
  //남은 기회 초기화
  chances = 5;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;

  //GO버튼 활성화
  gameOver = false;
  goBtn.disabled = false;
  goBtn.innerHTML = "GO!";
  goBtn.classList.remove("nonHover");

  //기존에 입력했던 값들을 저장한 배열 비우기
  pushNum = [];

  //결과를 알려주는 Text를 변경
  answerText.innerHTML = "리셋되었습니다!";

  answerText.classList.remove("good");
  answerText.classList.remove("up");
  answerText.classList.remove("down");
}
document.querySelector(".resetBtn").addEventListener("click", resetEvent);
