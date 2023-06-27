/* 
//promise-resolve 예제
let promise = new Promise(function(resolve,reject){
    setTimeout( () => resolve('실행결과'), 1000);
});

promise.then(result => {
    alert(result);
})
*/

/*
//promise-reject 예제
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('에러 발생')), 2000);
});

promise2.then(null, error => { // 2번째 인자에서 error 활용 가능
    alert(error);
})
*/

/*
//catch(함수) == then(null, 함수)
promise2.catch( error => {
    alert('eeeoroeoroe');
});
*/


/*
//filnally(함수)는 resolve, reject 여부에 상관없이 항상 실행 
promise2.finally(() => {
    alert('과연 프로미스의 결과는?');
  }).catch((result) => {
    alert(result);
});
*/

//프로미스 체이닝
let promise = new Promise(function(resolve, reject){
    setTimeout( ()=> resolve(1), 2000);
});

/*
promise.then(result=>{
    alert(result);
    return result*2;
}).then(result=>{
    alert(result);
    return new Promise(function(resolve, reject){
        setTimeout( ()=> resolve(result*2), 2000);
    });
}).then(result=>{
    alert(result);
});
*/

//체이닝을 활용한 에러 핸들링 
promise.then(result => {
    alert(`${result} 가공 중..`);
    throw new Error('에러발생');
}).catch(error => {
    alert(error);
});