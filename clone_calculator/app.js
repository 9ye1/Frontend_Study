let numFirst = ''; //계산입력 첫 번째 숫자
let numSecond = ''; //계산입력 두 번째 숫자
let opInput = null; //입력한 연산자를 저장하는 변수

const cp_input_num = document.querySelector('#io');

const oo = document.querySelector("#n0");
console.dir(oo);

oo.addEventListener('click', (event) => {

    console.log(event);

});

//자바스트립트는 funtional programming / higher order function
//특징 1  : 매개변수로 함수를 넘겨줄 수 있음 
//특징 2  : return 값을 함수로 설정할 수 있음 
const numFunc = (n)=>{
    //함수를 만들어서 return (higher order function)
    
    return ()=>{
        if(numFirst == '' && n == '0'){ //==은 데이터값만 비교 ===은 데이터타입까지 비교 
            cp_input_num.innerText = '0';
        }else if(opInput === null){
            numFirst = numFirst + n;
            cp_input_num.innerText = numFirst;
        }else{
            numSecond = numSecond + n;
            cp_input_num.innerText = numSecond;
        }
    };
};

/*const opFunc = (op) => {
    return ()=> {
        opInput = op;
}}; 아래 함수와 동일 */
const opFunc = (op) => ()=> {
    switch (op) {
        case '+': 
        case '-': 
        case '*': 
        case '/': 
            opInput = op;
            break;
        case '=':
            switch(opInput) {
                case '+': 
                    numFirst = cp_input_num.innerText = parseInt(numFirst)+parseInt(numSecond);
                    break;
                case '-': 
                    numFirst = cp_input_num.innerText = parseInt(numFirst)-parseInt(numSecond);
                    break;
                case '*': 
                    numFirst = cp_input_num.innerText = parseInt(numFirst)*parseInt(numSecond);
                    break;
                case '/': 
                    numFirst = cp_input_num.innerText = parseInt(numFirst)/parseInt(numSecond);
                    break;
            }
            numSecond = '';
            opInput = null;

            break;
        case 'clear':
            numFirst = '';
            numSecond = '';
            opInput = null;
            cp_input_num.innerText = '';

            break;


    }
};



document.querySelector('#n0').addEventListener('click', numFunc('0'));
document.querySelector('#n1').addEventListener('click', numFunc('1'));
document.querySelector('#n2').addEventListener('click', numFunc('2'));
document.querySelector('#n3').addEventListener('click', numFunc('3'));
document.querySelector('#n4').addEventListener('click', numFunc('4'));
document.querySelector('#n5').addEventListener('click', numFunc('5'));
document.querySelector('#n6').addEventListener('click', numFunc('6'));
document.querySelector('#n7').addEventListener('click', numFunc('7'));
document.querySelector('#n8').addEventListener('click', numFunc('8'));
document.querySelector('#n9').addEventListener('click', numFunc('9'));

document.querySelector('#op_plus').addEventListener('click', opFunc('+'));
document.querySelector('#op_sub').addEventListener('click', opFunc('-'));
document.querySelector('#op_multi').addEventListener('click', opFunc('*'));
document.querySelector('#op_div').addEventListener('click', opFunc('/'));
document.querySelector('#result').addEventListener('click', opFunc('='));
document.querySelector('#op_clr').addEventListener('click',  opFunc('clear'));