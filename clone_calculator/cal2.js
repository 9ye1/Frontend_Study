const num = document.querySelectorAll(".num"); //숫자 버튼 객체 (배열)
const display =  document.getElementById("io");//출력되는 칸
let result = ''; //문자열 저장 변수


num.forEach( (number) => {
    number.addEventListener("click", (event) =>{
        result += event.target.value;
        display.innerText = result;
    });
});


const opBtn = document.querySelectorAll(".op");
opBtn.forEach( (op) => {
  op.addEventListener("click", (e) => {
    result += e.target.value;
    display.innerText = result;
  });
});


const clearBtn = document.getElementById("op_clr");

clearBtn.addEventListener("click", () => {
  result = "";
  display.innerText = 0;
});

const calc = document.getElementById("calculate");
calc.addEventListener("click", () => {
    display.innerText = eval(result);
    result = eval(result);
});

