//async예제 프로미스 객체를 반환
/*
async function hello() {
    return '안녕';
}

hello().then(result => alert(result));
*/


//await 예제 
async function hello() {
    let promise = new Promise((resolve, reject) => {
        setTimeout( () => resolve('안녕'),2000);
    });
    let result = await promise; //프로미스 이행까지 대기 
    alert(result);
}

hello();