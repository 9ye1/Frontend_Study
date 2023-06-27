/*
//비동기 콜백함수 
function appendHello() {
    let hello = document.createElement('p');
    hello.innerText = '안녕하세요';
    setTimeout(()=> document.body.append(hello),2000);
}

appendHello();
console.log(document.getElementsByTagName('p'));
*/
function appendHello(callback) {
	let hello = document.createElement('p');
	hello.innerText = '안녕하세요'
	setTimeout(() => {
		document.body.append(hello);
		callback(); // 위 비동기 동작을 하고 나면 내가 원하는 콜백함수를 수행
	}, 2000);
}

appendHello(function() {
    console.log(document.getElementsByTagName('p'));
  });
/*
let user = {
	name: 'Kim',
	age: 20,
	setName: function(name) {
		this.name = name;
	}
}

function dispatchName(name, callback) {
    callback(name,age);
	callback.call(user,name);
}

dispatchName('Lee', user.setName); // user.setName('Lee') 실행

console.log(user.name); // Kim
console.log(window.name); // Lee
*/
/*
function actByName(name, callback) { // callback 이 아니라 다른 이름도 가능 (그냥 매개변수일뿐)
	alert(`${name}이 행동합니다.`);
	callback(name);
}

function sayHello(name) {
	alert(`안녕 난 ${name}이야`);
}

actByName('Kim', sayHello);
*/

//위의 코드에서 에러 핸들링 처리 
/*function appendText(text, callback) {
    let hello = document.createElement('p');
    hello.innerText = text;
    setTimeout(()=> {
        document.body.append(hello);
        if(document.getElementsByTagName('p').length>0){
            callback();
        }else{
            callback(new Error('에러 발생'));
        }
    },2000);
}

appendText('텍스트를 추가해봅시다', function(error) {  //에러는 첫번째 인자에 명시
    if(error){
        console.log('에러 발생');
    }else{
        console.log('추가 성공');
    }
});
*/

//연습문제 
//2초 후에 width 100px, height 100px 의 div 를 body 태그에 추가하는 함수를 
//작성하고, 콜백 함수를 활용해서 div 추가가 완료되면 해당 div 태그의 
//배경 색을 lightblue 로 변경하는 코드를 작성하세요.
/*
function appendDiv(callback) {
	let div = document.createElement('div');
	div.style.width = '100px';
	div.style.height = '100px';
	setTimeout(() => {
		document.body.append(div);
        callback();
	}, 2000);
}

appendDiv(() => {
  let div = document.createElement('div');
  div.style.backgroundColor = 'lightblue';
})
*/

/*
function appendDiv(callback) {
    
    let dd = document.createElement('div');
    dd.style.width='100px';
    dd.style.height='100px';
   

    setTimeout(()=> {
        document.body.append(dd);
        callback();
    },2000);
}

appendDiv(()=>{  //에러는 첫번째 인자에 명시
    
    let dd = document.getElementsByTagName('div');
    dd.style.backgroundColor='lightblue';
    console.log('추가 성공');
    
});
*/