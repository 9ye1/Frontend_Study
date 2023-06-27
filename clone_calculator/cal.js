const num = document.querySelectorAll(".num");
const display = document.getElementById("io");
let result = '';
//console.log(num);


//숫자 버튼 눌렸을 때 
num.forEach( (number) => {
    number.addEventListener("click", (e)=>{
        //console.log(e.target);
        result += e.target.value;
        display.innerText = result;
    });
});

//연산자 버튼 눌렸을 때
const opBtn = document.querySelectorAll(".op");
opBtn.forEach( (op) => {
  op.addEventListener("click", (e) => {
    result += e.target.value;
    display.innerText = result;
  });
});


//ac 버튼 눌렸을 때 
const clearBtn = document.getElementById("op_clr");
clearBtn.addEventListener("click", () => {
  result = "";
  display.innerText = 0;
  //   console.log(calcResult);
});


// = 버튼 눌렸을 때
const calc = document.getElementById("calculate");
calc.addEventListener("click", () => {
  //   console.log(eval(calcResult));
  display.innerText = eval(result);
  result = eval(result); // 그 전 결과에 이어서하기. 계산식에서 추가된 것이 아니게 하기 위해
});
